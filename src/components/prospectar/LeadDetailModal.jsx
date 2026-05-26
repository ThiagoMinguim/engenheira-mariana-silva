import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Pencil, MessageSquare, Phone, Mail, Globe, AtSign, MapPin } from 'lucide-react'
import { CATEGORY_MAP } from '../../lib/prospectar/categories'
import { STATUSES, formatPhone } from '../../lib/prospectar/storage'
import { CategoryIcon, StatusIcon } from '../../lib/prospectar/icons'

export default function LeadDetailModal({ lead, onClose, onEdit, onMessage, onChangeStatus, onAddNote }) {
  const [note, setNote] = useState('')
  const cat = CATEGORY_MAP[lead.category] || CATEGORY_MAP.outro
  const status = STATUSES.find((s) => s.id === lead.status) || STATUSES[0]

  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [onClose])

  const addNote = () => {
    if (!note.trim()) return
    onAddNote(note.trim())
    setNote('')
  }

  const interactions = (lead.interactions || []).slice().reverse()

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
          <div className="p-6 border-b border-cinza-dark/30 dark:border-white/10 flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-verde/10 dark:bg-verde/15 flex items-center justify-center text-verde dark:text-verde-300 flex-shrink-0">
                <CategoryIcon id={lead.category} className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h2 className="font-heading font-semibold text-lg text-grafite dark:text-white truncate">{lead.name || '(sem nome)'}</h2>
                <p className="text-xs text-grafite/55 dark:text-white/45 mt-0.5">{cat.label}{lead.city && ` • ${lead.city}`}</p>
                <span className={`inline-flex items-center gap-1 mt-2 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${status.color}`}>
                  <StatusIcon id={status.id} className="w-3 h-3" />
                  {status.label}
                </span>
              </div>
            </div>
            <button onClick={onClose} className="text-grafite/60 dark:text-white/50 hover:text-red-600 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-cinza dark:hover:bg-white/5 transition flex-shrink-0">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 max-h-[70vh] overflow-y-auto space-y-5">
            <div className="grid grid-cols-2 gap-3 text-sm">
              {lead.phone && (
                <a href={`tel:${lead.phone}`} className="block bg-cinza/50 dark:bg-grafite-dark/40 rounded-lg p-3 border border-cinza-dark/30 dark:border-white/10 hover:border-verde transition">
                  <p className="text-[10px] uppercase tracking-wider text-grafite/45 dark:text-white/40 font-semibold inline-flex items-center gap-1.5">
                    <Phone className="w-3 h-3" /> Telefone
                  </p>
                  <p className="text-grafite dark:text-white mt-0.5">{formatPhone(lead.phone)}</p>
                </a>
              )}
              {lead.email && (
                <a href={`mailto:${lead.email}`} className="block bg-cinza/50 dark:bg-grafite-dark/40 rounded-lg p-3 border border-cinza-dark/30 dark:border-white/10 hover:border-verde transition">
                  <p className="text-[10px] uppercase tracking-wider text-grafite/45 dark:text-white/40 font-semibold inline-flex items-center gap-1.5">
                    <Mail className="w-3 h-3" /> Email
                  </p>
                  <p className="text-grafite dark:text-white mt-0.5 truncate">{lead.email}</p>
                </a>
              )}
              {lead.website && (
                <a href={lead.website} target="_blank" rel="noopener noreferrer" className="block bg-cinza/50 dark:bg-grafite-dark/40 rounded-lg p-3 border border-cinza-dark/30 dark:border-white/10 hover:border-verde transition">
                  <p className="text-[10px] uppercase tracking-wider text-grafite/45 dark:text-white/40 font-semibold inline-flex items-center gap-1.5">
                    <Globe className="w-3 h-3" /> Site
                  </p>
                  <p className="text-grafite dark:text-white mt-0.5 truncate">{lead.website}</p>
                </a>
              )}
              {lead.instagram && (
                <a href={`https://instagram.com/${lead.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="block bg-cinza/50 dark:bg-grafite-dark/40 rounded-lg p-3 border border-cinza-dark/30 dark:border-white/10 hover:border-verde transition">
                  <p className="text-[10px] uppercase tracking-wider text-grafite/45 dark:text-white/40 font-semibold inline-flex items-center gap-1.5">
                    <AtSign className="w-3 h-3" /> Instagram
                  </p>
                  <p className="text-grafite dark:text-white mt-0.5">{lead.instagram}</p>
                </a>
              )}
              {lead.address && (
                <div className="col-span-2 bg-cinza/50 dark:bg-grafite-dark/40 rounded-lg p-3 border border-cinza-dark/30 dark:border-white/10">
                  <p className="text-[10px] uppercase tracking-wider text-grafite/45 dark:text-white/40 font-semibold inline-flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" /> Endereço
                  </p>
                  <p className="text-grafite dark:text-white mt-0.5 text-sm">{lead.address}</p>
                </div>
              )}
            </div>

            {lead.notes && (
              <div>
                <p className="text-xs font-semibold text-grafite/65 dark:text-white/55 uppercase tracking-wider mb-2">Notas</p>
                <p className="text-sm text-grafite/80 dark:text-white/70 whitespace-pre-wrap bg-cinza/50 dark:bg-grafite-dark/40 rounded-lg p-3 border border-cinza-dark/30 dark:border-white/10">
                  {lead.notes}
                </p>
              </div>
            )}

            <div>
              <p className="text-xs font-semibold text-grafite/65 dark:text-white/55 uppercase tracking-wider mb-2">Mudar status</p>
              <div className="flex flex-wrap gap-1.5">
                {STATUSES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => onChangeStatus(s.id)}
                    className={`px-2.5 py-1 text-xs font-medium rounded-full border transition inline-flex items-center gap-1 ${
                      lead.status === s.id
                        ? `${s.color} ring-2 ring-verde/30`
                        : 'bg-white dark:bg-grafite-dark text-grafite/70 dark:text-white/70 border-cinza-dark dark:border-white/15 hover:border-verde'
                    }`}
                  >
                    <StatusIcon id={s.id} className="w-3 h-3" />
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-grafite/65 dark:text-white/55 uppercase tracking-wider mb-2">Adicionar nota</p>
              <div className="flex gap-2">
                <input
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addNote()}
                  placeholder="ex: respondeu pedindo orçamento de fachada"
                  className="flex-1 px-3 py-2 text-sm rounded-lg border border-cinza-dark dark:border-white/15 bg-white dark:bg-grafite-dark text-grafite dark:text-white focus:outline-none focus:border-verde"
                />
                <button onClick={addNote} disabled={!note.trim()} className="px-3 py-2 text-xs font-semibold rounded-lg bg-verde text-white hover:bg-verde-600 disabled:opacity-40 disabled:cursor-not-allowed transition">
                  Salvar
                </button>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-grafite/65 dark:text-white/55 uppercase tracking-wider mb-3">Histórico de interações</p>
              {interactions.length === 0 ? (
                <p className="text-sm text-grafite/45 dark:text-white/40 italic">Nenhuma interação ainda.</p>
              ) : (
                <ul className="space-y-3 relative pl-4 border-l-2 border-cinza-dark dark:border-white/10">
                  {interactions.map((i, idx) => (
                    <li key={idx} className="relative">
                      <span className="absolute -left-[1.4rem] top-1 w-3 h-3 rounded-full bg-verde border-2 border-white dark:border-grafite" />
                      <p className="text-[11px] text-grafite/55 dark:text-white/40">
                        {new Date(i.date).toLocaleString('pt-BR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })} • <span className="uppercase tracking-wider">{labelType(i.type)}</span>
                      </p>
                      <p className="text-sm text-grafite dark:text-white whitespace-pre-wrap mt-0.5">{i.text}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="p-6 border-t border-cinza-dark/30 dark:border-white/10 flex items-center justify-between gap-2 flex-wrap">
            <button onClick={onEdit} className="px-4 py-2 text-sm font-semibold rounded-lg border border-cinza-dark dark:border-white/15 text-grafite dark:text-white hover:bg-cinza dark:hover:bg-white/5 transition inline-flex items-center gap-1.5">
              <Pencil className="w-4 h-4" /> Editar
            </button>
            {lead.phone && (
              <button onClick={onMessage} className="shimmer-btn px-5 py-2 text-sm font-semibold rounded-lg bg-verde text-white hover:bg-verde-600 transition shadow-sm shadow-verde/20 inline-flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Enviar mensagem
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function labelType(t) {
  switch (t) {
    case 'whatsapp_sent': return 'WhatsApp enviado'
    case 'status_change': return 'Mudança de status'
    case 'note': return 'Nota'
    case 'response_received': return 'Resposta recebida'
    default: return t
  }
}
