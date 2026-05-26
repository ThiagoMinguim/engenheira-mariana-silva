// Vercel Node serverless function — personaliza mensagem de prospecção usando
// o site do lead como contexto. Usa Gemini 2.5 Flash via Google AI Studio.
//
// POST /api/personalize
// body: { lead: { name, category, website, address, instagram }, templateText }
//
// Required env var: GEMINI_API_KEY  (aistudio.google.com → Get API key)

const MODELS = ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-flash-latest']
const endpointFor = (model) =>
  `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`
const RETRYABLE_STATUSES = new Set([429, 500, 502, 503, 504])

const SYSTEM_PROMPT = `Você ajuda a Mariana Silva, engenheira civil em Uberaba/MG, a personalizar mensagens de prospecção pra WhatsApp.

A MARIANA JÁ ESCREVEU A MENSAGEM. Sua única função é ADICIONAR uma frase curta de personalização logo após a saudação — não mais que isso. Você NÃO reescreve, NÃO melhora, NÃO formaliza nada.

REGRAS RÍGIDAS (qualquer violação invalida a resposta):

1. Mantenha o corpo da mensagem original PALAVRA POR PALAVRA. A lista de serviços, parágrafos, fechamento e assinatura ficam IGUAIS ao original.

2. Adicione no MÁXIMO uma frase (até 18 palavras) logo após "Olá, [Nome]! Tudo bem? 👋" mencionando algo concreto do site/contexto do lead. A frase deve soar natural, como se a Mariana tivesse digitado no WhatsApp.

3. Se NÃO houver contexto útil sobre o lead (site não acessado, site sem info clara), devolva a mensagem ORIGINAL EXATAMENTE como veio, sem adicionar nada. Não invente.

4. NUNCA use travessão "—" em texto que VOCÊ adicionar. Use vírgula ou ponto. O travessão da assinatura original pode ficar.

5. PROIBIDO usar essas palavras/expressões (cara de ChatGPT corporativo): "diferencial", "agregar valor", "otimizar processos", "soluções personalizadas", "patologias", "edificação", "valorização do patrimônio", "necessidades específicas", "parceria estratégica", "Atenciosamente", "Cordialmente".

6. NUNCA invente telefone, email, número ou dado que não esteja no original.

7. Estilo da Mariana: WhatsApp brasileiro, casual mas profissional. Frases curtas. Sem markdown bonito (sem "**bold:** desc"). Sem títulos. Conversa de gente normal.

8. Devolva APENAS o texto final. Sem aspas externas. Sem comentário. Sem "Aqui está:". Sem markdown explicando o que mudou.

EXEMPLO BOM:
Contexto: lead é "Imobiliária Visão", site fala de locação no centro de Uberaba.
Original: "Olá, Imobiliária Visão! Tudo bem? 👋\\n\\nMe chamo Mariana Silva, sou engenheira civil..."
Resposta: "Olá, Imobiliária Visão! Tudo bem? 👋 Vi que vocês são referência em locação no Centro de Uberaba.\\n\\nMe chamo Mariana Silva, sou engenheira civil..."
(O resto da mensagem segue IDÊNTICO ao original.)

EXEMPLO RUIM (não fazer):
Contexto: lead é "Imobiliária Visão", site genérico.
Resposta INVENTADA: "Vi que vocês trabalham com obras de alto padrão" ← NÃO FAZER, isso não tava no contexto.

EXEMPLO SEM CONTEXTO:
Contexto: site não acessado, só temos o nome "Construtora ABC".
Resposta: devolver a mensagem ORIGINAL sem mudar nada.`

const FETCH_TIMEOUT_MS = 8000
const MAX_SITE_CHARS = 3500
const MAX_RESPONSE_TOKENS = 1500

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method_not_allowed', message: 'Use POST.' })
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return res.status(500).json({
      error: 'missing_key',
      message: 'GEMINI_API_KEY não configurada. Veja o setup no painel da Vercel.',
    })
  }

  const body = await readBody(req)
  const { lead, templateText } = body || {}
  if (!lead || !templateText) {
    return res.status(400).json({ error: 'bad_request', message: 'lead e templateText são obrigatórios.' })
  }

  let websiteContext = ''
  let websiteStatus = 'skipped'
  if (lead.website) {
    try {
      websiteContext = await fetchSiteText(lead.website)
      websiteStatus = websiteContext ? 'ok' : 'empty'
    } catch (e) {
      websiteStatus = `error:${e.message}`
    }
  }

  const userPrompt = buildUserPrompt(lead, templateText, websiteContext)

  const payload = {
    systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
    contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
    generationConfig: {
      temperature: 0.35,
      topP: 0.85,
      maxOutputTokens: MAX_RESPONSE_TOKENS,
      responseMimeType: 'text/plain',
    },
    safetySettings: [
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
    ],
  }

  try {
    const { text, modelUsed } = await callGeminiWithFallback({ apiKey, payload })
    if (!text) {
      return res.status(500).json({ error: 'empty_response', message: 'Gemini retornou vazio.' })
    }
    return res.status(200).json({
      text,
      modelUsed,
      websiteStatus,
      websiteCharsUsed: websiteContext.length,
    })
  } catch (err) {
    const status = err.statusCode || 500
    return res.status(status).json({
      error: status === 503 ? 'gemini_overloaded' : 'gemini_api_error',
      status,
      message: err.message,
    })
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
        const data = await r.json()
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || ''
        return { text, modelUsed: model }
      } catch (e) {
        lastErr = e
        if (!RETRYABLE_STATUSES.has(e.statusCode)) break
        if (attempt === 0) await new Promise((r) => setTimeout(r, 700))
      }
    }
  }
  throw lastErr || new Error('Gemini falhou em todos os modelos.')
}

function buildUserPrompt(lead, templateText, websiteContext) {
  const parts = [
    `LEAD:`,
    `Nome: ${lead.name || '(sem nome)'}`,
    `Categoria: ${lead.category || 'desconhecida'}`,
    `Endereço: ${lead.address || 'n/a'}`,
    `Site: ${lead.website || 'n/a'}`,
    `Instagram: ${lead.instagram || 'n/a'}`,
  ]
  if (websiteContext) {
    parts.push('', 'CONTEXTO DO SITE (extrato de texto, pode estar incompleto):', websiteContext)
  } else {
    parts.push('', 'CONTEXTO DO SITE: não disponível — apenas ajuste a saudação naturalmente, sem inventar.')
  }
  parts.push('', 'MENSAGEM BASE (template):', templateText, '', 'Devolva a mensagem personalizada (somente o texto final):')
  return parts.join('\n')
}

async function fetchSiteText(url) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)
  try {
    const r = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; MariProspectar/1.0)' },
      signal: controller.signal,
      redirect: 'follow',
    })
    if (!r.ok) throw new Error(`HTTP ${r.status}`)
    const html = await r.text()
    return stripHtml(html).slice(0, MAX_SITE_CHARS)
  } finally {
    clearTimeout(timeout)
  }
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
}

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body
  if (typeof req.body === 'string') {
    try { return JSON.parse(req.body) } catch { return null }
  }
  return await new Promise((resolve, reject) => {
    let raw = ''
    req.on('data', (chunk) => { raw += chunk })
    req.on('end', () => {
      try { resolve(raw ? JSON.parse(raw) : null) } catch (e) { reject(e) }
    })
    req.on('error', reject)
  })
}
