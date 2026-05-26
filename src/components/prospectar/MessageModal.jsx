import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Loader2, Copy, KeyRound, Check, MessageSquare } from 'lucide-react'
import { CATEGORY_MAP } from '../../lib/prospectar/categories'
import { TEMPLATES, buildWhatsAppUrl } from '../../lib/prospectar/templates'
import { personalizeMessage, ApiError } from '../../lib/prospectar/api'
import { CategoryIcon } from '../../lib/prospectar/icons'

export default function MessageModal({ lead, onClose, onSent }) {
  const templates = useMemo(() => TEMPLATES[lead.category] || TEMPLATES.outro, [lead.category])
  const [tplId, setTplId] = useState(templates[0]?.id)
  const [text, setText] = useState('')
  const [aiState, setAiState] = useState({ status: 'idle', error: null, info: null })
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const tpl = templates.find((t) => t.id === tplId) || templates[0]
    if (!tpl) return
    setText(tpl.text({ name: lead.name }))
    setAiState({ status: 'idle', error: null, info: null })
  }, [tplId, templates, lead.name])

  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [onClose])

  const cat = CATEGORY_MAP[lead.category] || CATEGORY_MAP.outro
  const canSend = !!lead.phone

  const sendAndMark = () => {
    if (!canSend) return
    const url = buildWhatsAppUrl(lead.phone, text)
    window.open(url, '_blank', 'noopener,noreferrer')
    onSent(text)
  }

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      alert('Não consegui copiar. Selecione e copie manualmente.')
    }
  }

  const personalize = async () => {
    setAiState({ status: 'loading', error: null, info: null })
    try {
      const data = await personalizeMessage({ lead, templateText: text })
      setText(data.text)
      setAiState({
        status: 'done',
        error: null,
        info: {
          siteUsed: data.websiteStatus === 'ok',
          siteChars: data.websiteCharsUsed,
          siteStatus: data.websiteStatus,
          modelUsed: data.modelUsed,
        },
      })
    } catch (e) {
      setAiState({ status: 'error', error: e, info: null })
    }
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
          className="w-full max-w-2xl bg-white dark:bg-grafite rounded-2xl shadow-2xl my-8 overflow-hidden"
        >
          <div className="h-[3px] bg-dourado" />
          <div className="p-6 border-b border-cinza-dark/30 dark:border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-verde/10 dark:bg-verde/15 flex items-center justify-center text-verde dark:text-verde-300 flex-shrink-0">
                <CategoryIcon id={lead.category} className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h2 className="font-heading font-semibold text-lg text-grafite dark:text-white truncate">
                  Enviar para {lead.name}
                </h2>
                <p className="text-xs text-grafite/55 dark:text-white/45 mt-0.5">
                  {cat.label} {lead.phone && `• ${lead.phone}`}
                </p>
              </div>
            </div>
            <button onClick={onClose} className="text-grafite/60 dark:text-white/50 hover:text-red-600 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-cinza dark:hover:bg-white/5 transition flex-shrink-0">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-4">
            {!canSend && (
              <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded-lg p-3 text-sm text-red-700 dark:text-red-300">
                Esse lead não tem telefone cadastrado — só dá pra copiar a mensagem.
              </div>
            )}

            <div className="flex items-end justify-between gap-3 flex-wrap">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-grafite/65 dark:text-white/55 uppercase tracking-wider mb-2">Template</p>
                <div className="flex flex-wrap gap-2">
                  {templates.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTplId(t.id)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full border transition ${
                        tplId === t.id
                          ? 'bg-verde text-white border-verde'
                          : 'bg-white dark:bg-grafite-dark text-grafite/70 dark:text-white/70 border-cinza-dark dark:border-white/15 hover:border-verde'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={personalize}
                disabled={aiState.status === 'loading'}
                className="px-3 py-2 text-xs font-semibold rounded-lg border-2 border-dourado/40 bg-dourado/10 text-dourado-dark dark:text-dourado-light hover:bg-dourado hover:text-white hover:border-dourado disabled:opacity-50 transition inline-flex items-center gap-1.5"
                title="Personalizar com IA usando o site do lead como contexto"
              >
                {aiState.status === 'loading' ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" /> Personalizando…
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" /> Personalizar com IA
                  </>
                )}
              </button>
            </div>

            {aiState.status === 'done' && aiState.info && (
              <div className="text-[11px] text-verde dark:text-verde-300 bg-verde/5 dark:bg-verde/10 rounded-lg px-3 py-2 border border-verde/20 inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                {aiState.info.siteUsed
                  ? `Personalizado com base no site do lead (${aiState.info.siteChars} chars).`
                  : aiState.info.siteStatus === 'skipped'
                    ? 'Sem site cadastrado — personalização baseada só no nome/categoria.'
                    : 'Não consegui ler o site, personalização com base só no nome/categoria.'}
                {aiState.info.modelUsed && aiState.info.modelUsed !== 'gemini-2.5-flash' && (
                  <span className="opacity-60 ml-1">• via {aiState.info.modelUsed}</span>
                )}
              </div>
            )}

            {aiState.status === 'error' && aiState.error && (
              <AiErrorBox error={aiState.error} />
            )}

            <div>
              <p className="text-xs font-semibold text-grafite/65 dark:text-white/55 uppercase tracking-wider mb-2">Mensagem (editável)</p>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={14}
                className="w-full px-4 py-3 text-sm rounded-lg border border-cinza-dark dark:border-white/15 bg-white dark:bg-grafite-dark text-grafite dark:text-white focus:outline-none focus:border-verde transition resize-y font-mono leading-relaxed"
              />
              <p className="text-[11px] text-grafite/45 dark:text-white/40 mt-1.5">
                {text.length} caracteres • revise antes de enviar
              </p>
            </div>
          </div>

          <div className="p-6 border-t border-cinza-dark/30 dark:border-white/10 flex items-center justify-between gap-2 flex-wrap">
            <button onClick={copyText} className="px-4 py-2 text-sm font-semibold rounded-lg border border-cinza-dark dark:border-white/15 text-grafite dark:text-white hover:bg-cinza dark:hover:bg-white/5 transition inline-flex items-center gap-1.5">
              {copied ? <><Check className="w-4 h-4 text-verde" /> Copiado</> : <><Copy className="w-4 h-4" /> Copiar</>}
            </button>
            <div className="flex items-center gap-2">
              <button onClick={onClose} className="px-4 py-2 text-sm font-semibold rounded-lg text-grafite/70 dark:text-white/70 hover:bg-cinza dark:hover:bg-white/5 transition">
                Cancelar
              </button>
              <button
                onClick={sendAndMark}
                disabled={!canSend}
                className="shimmer-btn px-5 py-2 text-sm font-semibold rounded-lg bg-verde text-white hover:bg-verde-600 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-sm shadow-verde/20 inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Abrir WhatsApp
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function AiErrorBox({ error }) {
  if (error instanceof ApiError && error.isMissingKey) {
    return (
      <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 rounded-lg p-3 text-sm">
        <p className="font-semibold text-amber-900 dark:text-amber-300 inline-flex items-center gap-1.5">
          <KeyRound className="w-4 h-4" /> Gemini API key não configurada
        </p>
        <p className="text-xs text-amber-800 dark:text-amber-300/80 mt-1">
          Adicione <code className="font-mono bg-amber-100 dark:bg-amber-500/20 px-1 rounded">GEMINI_API_KEY</code> nas Environment Variables da Vercel. Pegue em <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer" className="underline">aistudio.google.com/apikey</a>.
        </p>
      </div>
    )
  }
  const isOverloaded = error instanceof ApiError && (error.code === 'gemini_overloaded' || error.status === 503)
  return (
    <div className="bg-red-50 dark:bg-red-500/10 border border-red-300 dark:border-red-500/30 rounded-lg p-3 text-sm">
      <p className="font-semibold text-red-900 dark:text-red-300">
        {isOverloaded ? 'Gemini está sobrecarregado' : 'Erro na personalização'}
      </p>
      <p className="text-xs text-red-800 dark:text-red-300/80 mt-1">
        {isOverloaded ? 'Tenta de novo em 10-30 segundos. Já tentei automaticamente em 2 modelos e ambos estavam ocupados.' : error.message}
      </p>
    </div>
  )
}
