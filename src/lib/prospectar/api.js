// Cliente das serverless functions em /api/*.

// Tenta Places (mais confiável) → se key não configurada, cai pra Gemini search.
export async function searchPlaces(query) {
  try {
    return await callSearchEndpoint('/api/places', query)
  } catch (e) {
    if (e instanceof ApiError && e.isMissingKey) {
      return await callSearchEndpoint('/api/search-leads', query)
    }
    throw e
  }
}

async function callSearchEndpoint(endpoint, query) {
  const r = await fetch(`${endpoint}?query=${encodeURIComponent(query)}`)
  const data = await r.json().catch(() => ({ error: 'invalid_response' }))
  if (!r.ok) {
    throw new ApiError(data?.message || `HTTP ${r.status}`, data?.error || 'unknown', r.status)
  }
  return { results: data.results || [], provider: data.provider || 'places', sources: data.sources || [] }
}

export async function personalizeMessage({ lead, templateText }) {
  const r = await fetch('/api/personalize', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ lead, templateText }),
  })
  const data = await r.json().catch(() => ({ error: 'invalid_response' }))
  if (!r.ok) {
    throw new ApiError(data?.message || `HTTP ${r.status}`, data?.error || 'unknown', r.status)
  }
  return data
}

export class ApiError extends Error {
  constructor(message, code, status) {
    super(message)
    this.code = code
    this.status = status
  }
  get isMissingKey() {
    return this.code === 'missing_key'
  }
}
