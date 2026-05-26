import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, ExternalLink, Sparkles, Loader2, Phone, Globe, MapPin, Star, KeyRound, Lightbulb } from 'lucide-react'
import { CATEGORIES, googleMapsSearchUrl } from '../../lib/prospectar/categories'
import { searchPlaces, ApiError } from '../../lib/prospectar/api'
import { createLead, normalizePhone } from '../../lib/prospectar/storage'
import { CategoryIcon } from '../../lib/prospectar/icons'

const CITIES = ['Uberaba MG', 'Uberlândia MG', 'Araxá MG', 'Frutal MG', 'Patrocínio MG', 'Patos de Minas MG']

export default function FinderPanel({ existingLeads, onClose, onBulkAdd }) {
  const [city, setCity] = useState(CITIES[0])
  const [customQuery, setCustomQuery] = useState('')
  const [activeSearch, setActiveSearch] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [results, setResults] = useState([])
  const [provider, setProvider] = useState(null)
  const [sources, setSources] = useState([])
  const [selected, setSelected] = useState(new Set())
  const contentRef = useRef(null)

  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [onClose])

  useEffect(() => {
    if (activeSearch && contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [activeSearch?.query])

  const existingPhones = useMemo(() => {
    const s = new Set()
    for (const l of existingLeads || []) {
      const p = (l.phone || '').replace(/\D/g, '')
      if (p) s.add(p)
      if (l.name) s.add(`name:${l.name.toLowerCase().trim()}`)
    }
    return s
  }, [existingLeads])

  const localized = (q) => `${q} em ${city}`

  const runSearch = async (query, categoryId) => {
    setLoading(true)
    setError(null)
    setResults([])
    setSelected(new Set())
    setActiveSearch({ query, categoryId })
    setProvider(null)
    setSources([])
    try {
      const { results: list, provider: prov, sources: srcs } = await searchPlaces(query)
      setProvider(prov)
      setSources(srcs)
      const enriched = list.map((r) => {
        const phoneDigits = (r.phone || '').replace(/\D/g, '')
        const dup = existingPhones.has(phoneDigits) || existingPhones.has(`name:${(r.name || '').toLowerCase().trim()}`)
        return { ...r, duplicate: dup }
      })
      setResults(enriched)
      const initial = new Set(enriched.filter((r) => !r.duplicate && r.phone).map((r) => r.placeId))
      setSelected(initial)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  const toggleSelect = (id) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const addSelected = () => {
    if (!activeSearch) return
    const toAdd = results
      .filter((r) => selected.has(r.placeId))
      .map((r) => createLead({
        name: r.name,
        category: activeSearch.categoryId || 'outro',
        phone: normalizePhone(r.phone),
        address: r.address,
        website: r.website,
        city,
        source: 'google_maps',
        notes: r.rating ? `Rating ${r.rating} (${r.reviewCount} avaliações no Google)` : '',
      }))
    if (!toAdd.length) return
    onBulkAdd(toAdd)
    setSelected(new Set())
    setResults((prev) => prev.map((r) => selected.has(r.placeId) ? { ...r, duplicate: true, justAdded: true } : r))
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-grafite/50 dark:bg-black/70 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-3xl bg-white dark:bg-grafite rounded-2xl shadow-2xl my-8 overflow-hidden"
        >
          <div className="h-[3px] bg-dourado" />
          <div className="p-6 border-b border-cinza-dark/30 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-verde/10 dark:bg-verde/15 flex items-center justify-center text-verde dark:text-verde-300">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading font-semibold text-lg text-grafite dark:text-white">
                  Caçar Leads
                </h2>
                <p className="text-xs text-grafite/55 dark:text-white/45 mt-0.5">
                  Busca direto no Google Places — traz resultados pra dentro do CRM.
                </p>
              </div>
            </div>
            <button onClick={onClose} className="text-grafite/60 dark:text-white/50 hover:text-red-600 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-cinza dark:hover:bg-white/5 transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div ref={contentRef} className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
            <div>
              <p className="text-xs font-semibold text-grafite/65 dark:text-white/55 uppercase tracking-wider mb-2">Cidade alvo</p>
              <div className="flex flex-wrap gap-2">
                {CITIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCity(c)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full border transition ${
                      city === c
                        ? 'bg-verde text-white border-verde'
                        : 'bg-white dark:bg-grafite-dark text-grafite/70 dark:text-white/70 border-cinza-dark dark:border-white/15 hover:border-verde'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {activeSearch && (
              <ResultsPanel
                activeSearch={activeSearch}
                loading={loading}
                error={error}
                results={results}
                selected={selected}
                provider={provider}
                onAddSelected={addSelected}
                onToggleSelect={toggleSelect}
              />
            )}

            {CATEGORIES.filter((c) => c.searches.length).map((cat) => (
              <div key={cat.id} className="bg-cinza/50 dark:bg-grafite-dark/40 rounded-xl p-4 border border-cinza-dark/30 dark:border-white/10">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-7 h-7 rounded-md bg-verde/10 dark:bg-verde/15 flex items-center justify-center text-verde dark:text-verde-300">
                    <CategoryIcon id={cat.id} className="w-4 h-4" />
                  </div>
                  <span className="font-heading font-semibold text-grafite dark:text-white">{cat.label}</span>
                </div>
                <p className="text-xs text-grafite/55 dark:text-white/45 mb-3">{cat.pitch}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.searches.map((q) => {
                    const finalQ = localized(q)
                    const isActive = activeSearch?.query === finalQ
                    return (
                      <div key={q} className="flex items-stretch rounded-lg overflow-hidden border border-verde/30">
                        <button
                          onClick={() => runSearch(finalQ, cat.id)}
                          disabled={loading && isActive}
                          className={`px-3 py-1.5 text-xs font-medium transition inline-flex items-center gap-1.5 ${
                            isActive
                              ? 'bg-verde text-white'
                              : 'bg-white dark:bg-grafite text-verde dark:text-verde-300 hover:bg-verde hover:text-white'
                          } disabled:opacity-50`}
                          title="Buscar no Google Places (traz pra cá)"
                        >
                          {loading && isActive ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <Sparkles className="w-3.5 h-3.5" />
                          )}
                          {finalQ}
                        </button>
                        <a
                          href={googleMapsSearchUrl(finalQ)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2 py-1.5 bg-white dark:bg-grafite text-grafite/60 dark:text-white/50 hover:bg-cinza dark:hover:bg-grafite-dark border-l border-verde/30 transition flex items-center"
                          title="Abrir no Google Maps"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}

            <div className="bg-dourado/10 dark:bg-dourado/15 border border-dourado/30 rounded-xl p-4">
              <p className="text-xs font-semibold text-dourado-dark dark:text-dourado-light uppercase tracking-wider mb-2">Busca personalizada</p>
              <div className="flex gap-2">
                <input
                  value={customQuery}
                  onChange={(e) => setCustomQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && customQuery.trim()) runSearch(`${customQuery} ${city}`, 'outro')
                  }}
                  placeholder="ex: shopping center, gestor de obras…"
                  className="flex-1 px-3 py-2 text-sm rounded-lg border border-cinza-dark dark:border-white/15 bg-white dark:bg-grafite-dark text-grafite dark:text-white focus:outline-none focus:border-verde"
                />
                <button
                  onClick={() => customQuery.trim() && runSearch(`${customQuery} ${city}`, 'outro')}
                  disabled={!customQuery.trim() || loading}
                  className="px-4 py-2 text-sm font-semibold rounded-lg bg-verde text-white hover:bg-verde-600 disabled:opacity-40 disabled:cursor-not-allowed transition inline-flex items-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4" />
                  Buscar
                </button>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 rounded-xl p-4 text-sm text-blue-900 dark:text-blue-200">
              <p className="font-semibold mb-1 inline-flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4" /> Fluxo recomendado
              </p>
              <ol className="list-decimal pl-5 space-y-1 text-blue-800 dark:text-blue-300 text-xs">
                <li>Escolha a cidade alvo no topo.</li>
                <li>Clique no botão de busca de uma categoria — os resultados aparecem aqui mesmo com checkbox.</li>
                <li>Confira a lista (duplicados em vermelho). Desmarque o que não interessa.</li>
                <li>Clique "Adicionar selecionados" → leads entram no CRM com status "A Contatar".</li>
                <li>Volte ao dashboard e use "Enviar" + "Personalizar com IA" pra mandar mensagem sob medida.</li>
              </ol>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function ResultsPanel({ activeSearch, loading, error, results, selected, provider, onAddSelected, onToggleSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-white dark:bg-grafite-dark border-2 border-verde/30 rounded-xl overflow-hidden shadow-md shadow-verde/10"
    >
      <div className="px-4 py-3 bg-verde/5 dark:bg-verde/10 border-b border-verde/20 flex items-center justify-between gap-2 flex-wrap">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-grafite dark:text-white truncate">Resultados — "{activeSearch.query}"</p>
          {!loading && !error && (
            <p className="text-[11px] text-grafite/55 dark:text-white/45 mt-0.5">
              {results.length} encontrados • {selected.size} selecionados • {results.filter((r) => r.duplicate).length} já existem
              {provider === 'gemini-search' && <span className="ml-1 text-dourado-dark dark:text-dourado-light">• via IA</span>}
            </p>
          )}
        </div>
        <button
          onClick={onAddSelected}
          disabled={!selected.size}
          className="shimmer-btn px-4 py-1.5 text-xs font-semibold rounded-lg bg-verde text-white hover:bg-verde-600 disabled:opacity-40 disabled:cursor-not-allowed transition inline-flex items-center gap-1.5"
        >
          Adicionar {selected.size} selecionados
        </button>
      </div>

      {loading && (
        <div className="p-6 text-center text-sm text-grafite/55 dark:text-white/45 inline-flex w-full items-center justify-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin" /> Buscando no Google Places…
        </div>
      )}

      {error && (
        <div className="p-4">
          <ApiErrorBox error={error} kind="places" />
        </div>
      )}

      {!loading && !error && provider === 'gemini-search' && results.length > 0 && (
        <div className="px-4 py-2 bg-dourado/5 border-b border-dourado/20 text-[11px] text-dourado-dark dark:text-dourado-light flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          Resultados via Gemini (busca no Google). Confira os dados — IA pode errar.
        </div>
      )}

      {!loading && !error && results.length === 0 && (
        <p className="p-6 text-center text-sm text-grafite/45 dark:text-white/40 italic">Nenhum resultado encontrado.</p>
      )}

      {!loading && !error && results.length > 0 && (
        <ul className="divide-y divide-cinza-dark/20 dark:divide-white/10 max-h-[420px] overflow-y-auto">
          {results.map((r) => {
            const isSel = selected.has(r.placeId)
            return (
              <li key={r.placeId} className={`p-3 flex items-start gap-3 transition ${r.duplicate ? 'opacity-60' : 'hover:bg-cinza/50 dark:hover:bg-white/5'}`}>
                <input
                  type="checkbox"
                  checked={isSel}
                  onChange={() => onToggleSelect(r.placeId)}
                  className="mt-1 w-4 h-4 accent-verde flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-sm text-grafite dark:text-white truncate">{r.name}</p>
                    {r.rating && (
                      <span className="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 bg-dourado/20 text-dourado-dark dark:text-dourado-light rounded-full">
                        <Star className="w-2.5 h-2.5 fill-current" /> {r.rating} ({r.reviewCount})
                      </span>
                    )}
                    {r.duplicate && (
                      <span className="text-[10px] px-1.5 py-0.5 bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-300 rounded-full">
                        {r.justAdded ? 'adicionado' : 'já existe'}
                      </span>
                    )}
                    {!r.phone && (
                      <span className="text-[10px] px-1.5 py-0.5 bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 rounded-full">
                        sem telefone
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-grafite/55 dark:text-white/45 mt-0.5 truncate">{r.address}</p>
                  <div className="flex items-center gap-3 mt-1 text-[11px] text-grafite/55 dark:text-white/45 flex-wrap">
                    {r.phone && (
                      <span className="inline-flex items-center gap-1">
                        <Phone className="w-3 h-3" /> {r.phone}
                      </span>
                    )}
                    {r.website && (
                      <a href={r.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-verde dark:text-verde-300 hover:underline truncate max-w-[200px]">
                        <Globe className="w-3 h-3" /> {r.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                      </a>
                    )}
                    {r.mapsUrl && (
                      <a href={r.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-grafite/55 dark:text-white/40 hover:text-verde transition">
                        <MapPin className="w-3 h-3" /> Maps
                      </a>
                    )}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </motion.div>
  )
}

function ApiErrorBox({ error, kind }) {
  if (error instanceof ApiError && error.isMissingKey) {
    const envName = kind === 'places' ? 'GOOGLE_PLACES_API_KEY' : 'GEMINI_API_KEY'
    const stepHint = kind === 'places'
      ? 'Console do Google Cloud → "Places API (New)" → criar chave.'
      : 'aistudio.google.com → "Get API Key" → criar.'
    return (
      <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 rounded-lg p-3 text-sm">
        <p className="font-semibold text-amber-900 dark:text-amber-300 inline-flex items-center gap-1.5">
          <KeyRound className="w-4 h-4" /> API key não configurada
        </p>
        <p className="text-xs text-amber-800 dark:text-amber-300/80 mt-1">
          Adicione <code className="font-mono bg-amber-100 dark:bg-amber-500/20 px-1 rounded">{envName}</code> nas Environment Variables do painel da Vercel.
        </p>
        <p className="text-xs text-amber-800/70 dark:text-amber-300/60 mt-1">{stepHint}</p>
      </div>
    )
  }
  return (
    <div className="bg-red-50 dark:bg-red-500/10 border border-red-300 dark:border-red-500/30 rounded-lg p-3 text-sm">
      <p className="font-semibold text-red-900 dark:text-red-300">Erro</p>
      <p className="text-xs text-red-800 dark:text-red-300/80 mt-1">{error.message}</p>
    </div>
  )
}
