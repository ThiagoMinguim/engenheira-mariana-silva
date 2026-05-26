const STORAGE_KEY = 'mari_prospectar_v1'
const AUTH_KEY = 'mari_prospectar_auth'
const ACCESS_TOKEN = 'mari2026'

export const STATUSES = [
  { id: 'pending', label: 'A Contatar', color: 'bg-dourado/10 text-dourado-dark border-dourado/30 dark:bg-dourado/15 dark:text-dourado-light dark:border-dourado/30' },
  { id: 'contacted', label: 'Mensagem Enviada', color: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/30' },
  { id: 'responding', label: 'Conversando', color: 'bg-verde/10 text-verde-700 border-verde/30 dark:bg-verde/20 dark:text-verde-300 dark:border-verde/40' },
  { id: 'meeting', label: 'Reunião Marcada', color: 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-500/30' },
  { id: 'closed', label: 'Fechado', color: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/30' },
  { id: 'not_interested', label: 'Sem Interesse', color: 'bg-red-100 text-red-600 border-red-200 dark:bg-red-500/10 dark:text-red-300 dark:border-red-500/30' },
]

const DEFAULT_STATE = {
  leads: [],
  updatedAt: null,
}

export function isAuthed() {
  return localStorage.getItem(AUTH_KEY) === ACCESS_TOKEN
}

export function authenticate(token) {
  if (token?.trim() === ACCESS_TOKEN) {
    localStorage.setItem(AUTH_KEY, ACCESS_TOKEN)
    return true
  }
  return false
}

export function signOut() {
  localStorage.removeItem(AUTH_KEY)
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULT_STATE }
    const parsed = JSON.parse(raw)
    return { ...DEFAULT_STATE, ...parsed }
  } catch {
    return { ...DEFAULT_STATE }
  }
}

export function saveState(state) {
  const next = { ...state, updatedAt: new Date().toISOString() }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  return next
}

export function createLead(partial = {}) {
  const now = new Date().toISOString()
  return {
    id: crypto.randomUUID(),
    name: '',
    category: 'imobiliaria',
    phone: '',
    email: '',
    instagram: '',
    website: '',
    address: '',
    city: 'Uberaba',
    notes: '',
    status: 'pending',
    contactedAt: null,
    lastInteractionAt: null,
    nextFollowUpAt: null,
    interactions: [],
    source: 'google_maps',
    createdAt: now,
    ...partial,
  }
}

export function exportJSON(state) {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `prospectar-${new Date().toISOString().slice(0, 10)}.json`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export async function importJSON(file) {
  const text = await file.text()
  const parsed = JSON.parse(text)
  if (!Array.isArray(parsed.leads)) throw new Error('Arquivo inválido')
  return parsed
}

export function normalizePhone(raw) {
  if (!raw) return ''
  const digits = raw.replace(/\D/g, '')
  if (!digits) return ''
  if (digits.startsWith('55')) return digits
  if (digits.length === 11 || digits.length === 10) return `55${digits}`
  return digits
}

export function formatPhone(raw) {
  const d = (raw || '').replace(/\D/g, '')
  if (d.length === 13 && d.startsWith('55')) {
    return `+55 (${d.slice(2, 4)}) ${d.slice(4, 9)}-${d.slice(9)}`
  }
  if (d.length === 12 && d.startsWith('55')) {
    return `+55 (${d.slice(2, 4)}) ${d.slice(4, 8)}-${d.slice(8)}`
  }
  if (d.length === 11) {
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
  }
  if (d.length === 10) {
    return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  }
  return raw
}

export function daysSince(iso) {
  if (!iso) return null
  const ms = Date.now() - new Date(iso).getTime()
  return Math.floor(ms / (1000 * 60 * 60 * 24))
}

export function needsFollowUp(lead) {
  if (lead.status !== 'contacted') return false
  const d = daysSince(lead.contactedAt || lead.lastInteractionAt)
  return d !== null && d >= 3
}
