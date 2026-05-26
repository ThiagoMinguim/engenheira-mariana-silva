import { Inbox, Phone, MapPin, Mail, AlarmClock, Pencil, Trash2, Send } from 'lucide-react'
import { CATEGORY_MAP } from '../../lib/prospectar/categories'
import { STATUSES, daysSince, formatPhone, needsFollowUp } from '../../lib/prospectar/storage'
import { CategoryIcon, StatusIcon } from '../../lib/prospectar/icons'

export default function LeadPipeline({ leads, selectedIds, onToggleSelect, onEdit, onMessage, onChangeStatus, onDelete, onOpenDetail, emptyHint }) {
  if (!leads.length) {
    return (
      <div className="bg-white dark:bg-grafite rounded-2xl border-2 border-dashed border-cinza-dark/40 dark:border-white/10 p-12 text-center">
        <Inbox className="w-12 h-12 mx-auto text-grafite/30 dark:text-white/30 mb-3" strokeWidth={1.5} />
        <p className="font-heading font-semibold text-grafite dark:text-white">Sem leads aqui ainda</p>
        <p className="text-sm text-grafite/55 dark:text-white/45 mt-2 max-w-md mx-auto">{emptyHint}</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {leads.map((lead) => (
        <LeadCard
          key={lead.id}
          lead={lead}
          selected={selectedIds?.has(lead.id)}
          onToggleSelect={() => onToggleSelect(lead.id)}
          onEdit={() => onEdit(lead)}
          onMessage={() => onMessage(lead)}
          onChangeStatus={(s) => onChangeStatus(lead, s)}
          onDelete={() => onDelete(lead)}
          onOpenDetail={() => onOpenDetail(lead)}
        />
      ))}
    </div>
  )
}

function LeadCard({ lead, selected, onToggleSelect, onEdit, onMessage, onChangeStatus, onDelete, onOpenDetail }) {
  const cat = CATEGORY_MAP[lead.category] || CATEGORY_MAP.outro
  const status = STATUSES.find((s) => s.id === lead.status) || STATUSES[0]
  const followUp = needsFollowUp(lead)
  const daysContact = lead.contactedAt ? daysSince(lead.contactedAt) : null

  return (
    <div className={`card-lift bg-white dark:bg-grafite rounded-xl border p-4 flex flex-col sm:flex-row sm:items-center gap-3 transition ${
      selected
        ? 'border-verde ring-2 ring-verde/30 bg-verde/[0.02] dark:bg-verde/[0.05]'
        : 'border-cinza-dark/30 dark:border-white/10'
    }`}>
      <label
        onClick={(e) => e.stopPropagation()}
        className="flex-shrink-0 flex items-center cursor-pointer"
        title="Selecionar para ações em massa"
      >
        <input
          type="checkbox"
          checked={!!selected}
          onChange={onToggleSelect}
          className="w-[18px] h-[18px] accent-verde cursor-pointer"
        />
      </label>

      <button
        onClick={onOpenDetail}
        className="flex-1 min-w-0 text-left flex items-center gap-3"
        title="Ver detalhes"
      >
        <div className="w-10 h-10 rounded-lg bg-verde/10 dark:bg-verde/15 flex items-center justify-center text-verde dark:text-verde-300 flex-shrink-0">
          <CategoryIcon id={lead.category} className="w-5 h-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-heading font-semibold text-grafite dark:text-white truncate">
              {lead.name || '(sem nome)'}
            </span>
            <span className={`inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${status.color}`}>
              <StatusIcon id={status.id} className="w-3 h-3" />
              {status.label}
            </span>
            {followUp && (
              <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border bg-amber-100 text-amber-700 border-amber-300 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/30">
                <AlarmClock className="w-3 h-3" />
                Follow-up
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 text-xs text-grafite/55 dark:text-white/45 mt-1 flex-wrap">
            <span>{cat.label}</span>
            {lead.phone && (
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3 h-3" /> {formatPhone(lead.phone)}
              </span>
            )}
            {lead.city && (
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {lead.city}
              </span>
            )}
            {daysContact !== null && (
              <span className="inline-flex items-center gap-1" title={`Contactado em ${new Date(lead.contactedAt).toLocaleDateString('pt-BR')}`}>
                <Mail className="w-3 h-3" /> {daysContact === 0 ? 'hoje' : `${daysContact}d atrás`}
              </span>
            )}
          </div>
        </div>
      </button>

      <div className="flex items-center gap-2 flex-shrink-0">
        {lead.phone && (
          <button
            onClick={onMessage}
            className="px-3 py-2 text-xs font-semibold rounded-lg bg-verde text-white hover:bg-verde-600 transition shadow-sm shadow-verde/20 flex items-center gap-1.5"
            title="Enviar mensagem WhatsApp"
          >
            <Send className="w-3.5 h-3.5" />
            Enviar
          </button>
        )}
        <select
          value={lead.status}
          onChange={(e) => onChangeStatus(e.target.value)}
          className="text-xs rounded-lg border border-cinza-dark dark:border-white/15 bg-white dark:bg-grafite-dark text-grafite dark:text-white px-2 py-2 cursor-pointer focus:outline-none focus:border-verde dark:focus:border-verde-300"
          title="Mudar status"
        >
          {STATUSES.map((s) => (
            <option key={s.id} value={s.id}>{s.label}</option>
          ))}
        </select>
        <button onClick={onEdit} className="w-8 h-8 flex items-center justify-center text-grafite/60 dark:text-white/50 hover:text-verde dark:hover:text-verde-300 rounded-lg hover:bg-cinza dark:hover:bg-white/5 transition" title="Editar">
          <Pencil className="w-4 h-4" />
        </button>
        <button onClick={onDelete} className="w-8 h-8 flex items-center justify-center text-grafite/60 dark:text-white/50 hover:text-red-600 dark:hover:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 transition" title="Apagar">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
