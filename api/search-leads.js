// Vercel Node serverless function — busca leads usando Gemini 2.5 Flash
// com Google Search grounding (em vez do Places API pago).
//
// GET /api/search-leads?query=imobili%C3%A1rias%20em%20Uberaba%20MG
//
// Required env var: GEMINI_API_KEY  (aistudio.google.com → Get API key)

const MODELS = ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-flash-latest']
const endpointFor = (model) =>
  `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`
const RETRYABLE_STATUSES = new Set([429, 500, 502, 503, 504])

const SYSTEM_PROMPT = `Você é assistente da Mariana Silva, engenheira civil em Uberaba que está prospectando clientes B2B.

Sua tarefa: usar o Google Search pra encontrar empresas reais que correspondam à busca fornecida, e devolver dados estruturados.

REGRAS:
- Use a ferramenta de busca pra pesquisar de verdade no Google e extrair informações reais.
- Devolva entre 8 e 15 resultados.
- Para cada empresa, tente extrair: nome, telefone (com DDD), endereço completo, site (URL completa), Instagram (se mencionado).
- NUNCA INVENTE telefones, sites ou endereços. Se não encontrar uma informação, deixe como string vazia "".
- Não invente empresas — só inclua as que aparecem em fontes reais nas buscas.
- Foque na cidade/região mencionada na query.
- Devolva APENAS o JSON, sem markdown, sem code fences, sem texto antes ou depois.

Formato de saída (JSON puro):
{
  "results": [
    {
      "name": "Nome da Empresa",
      "phone": "(34) 99999-9999",
      "address": "Rua X, 123 - Bairro - Uberaba/MG",
      "website": "https://exemplo.com.br",
      "instagram": "@exemplo",
      "source": "url de onde tirou a info"
    }
  ]
}`

export default async function handler(req, res) {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return res.status(500).json({
      error: 'missing_key',
      message: 'GEMINI_API_KEY não configurada.',
    })
  }

  const query = (req.query?.query || '').toString().trim()
  if (!query) {
    return res.status(400).json({ error: 'bad_request', message: 'Parâmetro "query" é obrigatório.' })
  }

  const userPrompt = `Busca: "${query}"\n\nUse o Google Search e devolva o JSON com os resultados.`

  const payload = {
    systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
    contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
    tools: [{ google_search: {} }],
    generationConfig: { temperature: 0.2, maxOutputTokens: 4000 },
  }

  let data, modelUsed
  try {
    const result = await callGeminiWithFallback({ apiKey, payload })
    data = result.data
    modelUsed = result.modelUsed
  } catch (err) {
    const status = err.statusCode || 500
    return res.status(status).json({
      error: status === 503 ? 'gemini_overloaded' : 'gemini_api_error',
      status,
      message: err.message,
    })
  }

  try {
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || ''
    const parsed = extractJSON(rawText)

    if (!parsed || !Array.isArray(parsed.results)) {
      return res.status(500).json({
        error: 'parse_error',
        message: 'Gemini não devolveu JSON válido.',
        raw: rawText.slice(0, 1000),
      })
    }

    const cleaned = parsed.results
      .filter((r) => r && r.name)
      .map((r) => ({
        placeId: `gemini:${slugify(r.name)}:${slugify(r.phone || r.address || '')}`,
        name: r.name?.trim() || '',
        phone: r.phone?.trim() || '',
        address: r.address?.trim() || '',
        website: r.website?.trim() || '',
        instagram: r.instagram?.trim() || '',
        source: r.source || '',
        rating: null,
        reviewCount: 0,
      }))

    const groundingChunks = data.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    const sources = groundingChunks
      .map((c) => c.web?.title)
      .filter(Boolean)
      .slice(0, 5)

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600')
    return res.status(200).json({
      query,
      count: cleaned.length,
      results: cleaned,
      sources,
      provider: 'gemini-search',
      modelUsed,
    })
  } catch (err) {
    return res.status(500).json({ error: 'internal', message: err.message })
  }
}

async function callGeminiWithFallback({ apiKey, payload }) {
  let lastErr
  for (const model of MODELS) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const r = await fetch(`${endpointFor(model)}?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!r.ok) {
          const errText = await r.text()
          const err = new Error(errText.slice(0, 400))
          err.statusCode = r.status
          throw err
        }
        return { data: await r.json(), modelUsed: model }
      } catch (e) {
        lastErr = e
        if (!RETRYABLE_STATUSES.has(e.statusCode)) break
        if (attempt === 0) await new Promise((r) => setTimeout(r, 700))
      }
    }
  }
  throw lastErr || new Error('Gemini falhou em todos os modelos.')
}

function extractJSON(text) {
  if (!text) return null
  const trimmed = text.trim().replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/i, '').trim()
  try { return JSON.parse(trimmed) } catch {}
  const match = trimmed.match(/\{[\s\S]*\}/)
  if (match) {
    try { return JSON.parse(match[0]) } catch {}
  }
  return null
}

function slugify(s) {
  return (s || '')
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40)
}
