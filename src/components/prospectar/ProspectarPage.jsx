import { useEffect, useMemo, useState } from 'react'
import { Search, Plus, Sun, Moon, MoreVertical, Download, Upload, LogOut, AlarmClock } from 'lucide-react'
import { isAuthed, loadState, saveState, signOut, STATUSES, needsFollowUp, exportJSON, importJSON } from '../../lib/prospectar/storage'
import { StatusIcon } from '../../lib/prospectar/icons'
import LoginGate from './LoginGate'
import StatsBar from './StatsBar'
import LeadPipeline from './LeadPipeline'
import AddLeadModal from './AddLeadModal'
import MessageModal from './MessageModal'
import FinderPanel from './FinderPanel'
import LeadDetailModal from './LeadDetailModal'
import ConfirmDialog from './ConfirmDialog'
import BulkActionsBar from './BulkActionsBar'

export default function ProspectarPage({ dark, toggleTheme }) {
  const [authed, setAuthed] = useState(() => isAuthed())
  const [state, setState] = useState(() => loadState())
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [showAdd, setShowAdd] = useState(false)
  const [showFinder, setShowFinder] = useState(false)
  const [editLead, setEditLead] = useState(null)
  const [messageLead, setMessageLead] = useState(null)
  const [detailLead, setDetailLead] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [confirmState, setConfirmState] = useState(null)
  const [selectedIds, setSelectedIds] = useState(() => new Set())

  useEffect(() => {
    document.title = 'Prospectar — Mariana Silva'
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => document.head.removeChild(meta)
  }, [])

  const updateState = (next) => {
    const saved = saveState(next)
    setState(saved)
  }

  const upsertLead = (lead) => {
    const existing = state.leads.findIndex((l) => l.id === lead.id)
    const leads = existing >= 0
      ? state.leads.map((l) => (l.id === lead.id ? lead : l))
      : [lead, ...state.leads]
    updateState({ ...state, leads })
  }

  const bulkAddLeads = (newLeads) => {
    if (!newLeads?.length) return
    updateState({ ...state, leads: [...newLeads, ...state.leads] })
  }

  const deleteLead = (id) => {
    updateState({ ...state, leads: state.leads.filter((l) => l.id !== id) })
    setSelectedIds((prev) => {
      if (!prev.has(id)) return prev
      const next = new Set(prev)
      next.delete(id)
      return next
    })
  }

  const changeStatus = (lead, newStatus) => {
    const now = new Date().toISOString()
    const updated = {
      ...lead,
      status: newStatus,
      lastInteractionAt: now,
      interactions: [
        ...(lead.interactions || []),
        { date: now, type: 'status_change', text: `Status: ${newStatus}` },
      ],
    }
    upsertLead(updated)
  }

  const markAsContacted = (lead, sentText) => {
    const now = new Date().toISOString()
    upsertLead({
      ...lead,
      status: 'contacted',
      contactedAt: lead.contactedAt || now,
      lastInteractionAt: now,
      interactions: [
        ...(lead.interactions || []),
        { date: now, type: 'whatsapp_sent', text: sentText },
      ],
    })
  }

  const filteredLeads = useMemo(() => {
    let leads = state.leads
    if (filter !== 'all') {
      if (filter === 'follow_up') {
        leads = leads.filter(needsFollowUp)
      } else {
        leads = leads.filter((l) => l.status === filter)
      }
    }
    if (search.trim()) {
      const q = search.toLowerCase().trim()
      leads = leads.filter((l) =>
        [l.name, l.notes, l.address, l.phone, l.email, l.instagram].some((f) =>
          (f || '').toLowerCase().includes(q),
        ),
      )
    }
    return leads
  }, [state.leads, filter, search])

  const toggleSelect = (id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const selectAllVisible = () => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      for (const l of filteredLeads) next.add(l.id)
      return next
    })
  }

  const clearSelection = () => setSelectedIds(new Set())

  const requestDeleteLead = (lead) => {
    setConfirmState({
      title: `Apagar "${lead.name || 'lead sem nome'}"?`,
      message: 'Essa ação não pode ser desfeita. Toda a história de interações desse lead será perdida.',
      confirmLabel: 'Apagar',
      danger: true,
      onConfirm: () => { deleteLead(lead.id); setConfirmState(null) },
    })
  }

  const requestBulkDelete = () => {
    const n = selectedIds.size
    if (!n) return
    setConfirmState({
      title: `Apagar ${n} lead${n > 1 ? 's' : ''}?`,
      message: 'Essa ação não pode ser desfeita. Todos os históricos de interação serão perdidos.',
      confirmLabel: `Apagar ${n}`,
      danger: true,
      onConfirm: () => {
        updateState({ ...state, leads: state.leads.filter((l) => !selectedIds.has(l.id)) })
        clearSelection()
        setConfirmState(null)
      },
    })
  }

  const bulkChangeStatus = (newStatus) => {
    if (!selectedIds.size) return
    const now = new Date().toISOString()
    const leads = state.leads.map((l) => {
      if (!selectedIds.has(l.id)) return l
      return {
        ...l,
        status: newStatus,
        lastInteractionAt: now,
        interactions: [
          ...(l.interactions || []),
          { date: now, type: 'status_change', text: `Status: ${newStatus} (bulk)` },
        ],
      }
    })
    updateState({ ...state, leads })
  }

  const requestSignOut = () => {
    setMenuOpen(false)
    setConfirmState({
      title: 'Sair da área privada?',
      message: 'Você precisará digitar a senha de novo pra voltar.',
      confirmLabel: 'Sair',
      onConfirm: () => { signOut(); setAuthed(false); setConfirmState(null) },
    })
  }

  if (!authed) {
    return <LoginGate onSuccess={() => setAuthed(true)} />
  }

  const handleImport = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      const parsed = await importJSON(file)
      const merged = mergeStates(state, parsed)
      updateState(merged)
      alert(`Importado: ${parsed.leads.length} leads.`)
    } catch (err) {
      alert(`Erro ao importar: ${err.message}`)
    } finally {
      e.target.value = ''
    }
  }

  return (
    <div className="min-h-screen bg-cinza dark:bg-grafite-dark" onClick={() => setMenuOpen(false)}>
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-grafite-dark/95 backdrop-blur border-b border-cinza-dark/30 dark:border-white/10">
        <div className="h-[3px] bg-dourado" />
        <div className="container mx-auto px-4 lg:px-8 py-3 flex items-center gap-3 flex-wrap">
          <a href="/" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new Event('app:navigate')) }} className="flex items-center gap-2 group">
            <picture>
              <source type="image/webp" srcSet="/logo.webp" />
              <img src="/logo-168.png" alt="" width={36} height={36} className="dark:brightness-0 dark:invert" />
            </picture>
            <div>
              <p className="font-heading text-[13px] font-bold tracking-[0.08em] text-grafite dark:text-white leading-tight uppercase">Prospectar</p>
              <p className="font-heading text-[9px] tracking-[0.22em] text-verde dark:text-verde-300 font-semibold leading-tight uppercase">CRM Pessoal</p>
            </div>
          </a>

          <div className="ml-auto flex items-center gap-2 flex-wrap">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-grafite/40 dark:text-white/40 pointer-events-none" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar lead…"
                className="pl-9 pr-3 py-2 text-sm rounded-lg border border-cinza-dark dark:border-white/15 bg-white dark:bg-grafite text-grafite dark:text-white placeholder:text-grafite/40 dark:placeholder:text-white/40 focus:outline-none focus:border-verde dark:focus:border-verde-300 w-44"
              />
            </div>
            <button
              onClick={() => setShowFinder(true)}
              className="px-3 py-2 text-sm font-medium rounded-lg border border-cinza-dark dark:border-white/15 bg-white dark:bg-grafite text-grafite dark:text-white hover:border-verde dark:hover:border-verde-300 hover:text-verde dark:hover:text-verde-300 transition inline-flex items-center gap-1.5"
              title="Encontrar leads no Google Maps"
            >
              <Search className="w-4 h-4" />
              Caçar Leads
            </button>
            <button
              onClick={() => { setEditLead(null); setShowAdd(true) }}
              className="shimmer-btn px-4 py-2 text-sm font-semibold rounded-lg bg-verde text-white hover:bg-verde-600 transition shadow-sm shadow-verde/20 inline-flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              Adicionar Lead
            </button>
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-grafite/70 dark:text-white/70 hover:text-verde dark:hover:text-verde-300 hover:bg-cinza dark:hover:bg-white/10 transition"
              aria-label="Alternar tema"
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-grafite/70 dark:text-white/70 hover:text-verde dark:hover:text-verde-300 hover:bg-cinza dark:hover:bg-white/10 transition"
                aria-label="Mais opções"
              >
                <MoreVertical className="w-4 h-4" />
              </button>
              {menuOpen && (
                <div className="absolute right-0 top-full mt-1 w-56 bg-white dark:bg-grafite border border-cinza-dark dark:border-white/10 rounded-lg shadow-xl z-50 py-1">
                  <button onClick={() => { exportJSON(state); setMenuOpen(false) }} className="w-full text-left px-4 py-2.5 text-sm text-grafite dark:text-white hover:bg-cinza dark:hover:bg-white/5 transition inline-flex items-center gap-2.5">
                    <Download className="w-4 h-4 text-grafite/55 dark:text-white/45" /> Exportar (backup)
                  </button>
                  <label className="w-full text-left px-4 py-2.5 text-sm text-grafite dark:text-white hover:bg-cinza dark:hover:bg-white/5 transition inline-flex items-center gap-2.5 cursor-pointer">
                    <Upload className="w-4 h-4 text-grafite/55 dark:text-white/45" /> Importar JSON
                    <input type="file" accept="application/json" onChange={(e) => { handleImport(e); setMenuOpen(false) }} className="hidden" />
                  </label>
                  <button
                    onClick={requestSignOut}
                    className="w-full text-left px-4 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-cinza dark:hover:bg-white/5 transition inline-flex items-center gap-2.5 border-t border-cinza-dark dark:border-white/10 mt-1 pt-2.5"
                  >
                    <LogOut className="w-4 h-4" /> Sair
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 lg:px-8 py-6 space-y-6">
        <StatsBar leads={state.leads} />

        <div className="flex flex-wrap gap-2 items-center">
          <Chip active={filter === 'all'} onClick={() => setFilter('all')}>
            Todos <span className="opacity-60 ml-1">{state.leads.length}</span>
          </Chip>
          <Chip active={filter === 'follow_up'} onClick={() => setFilter('follow_up')} accent="amber">
            <AlarmClock className="w-3 h-3" />
            Follow-up
            <span className="opacity-70 ml-1">{state.leads.filter(needsFollowUp).length}</span>
          </Chip>
          {STATUSES.map((s) => {
            const count = state.leads.filter((l) => l.status === s.id).length
            return (
              <Chip key={s.id} active={filter === s.id} onClick={() => setFilter(s.id)}>
                <StatusIcon id={s.id} className="w-3 h-3" />
                {s.label}
                <span className="opacity-60 ml-1">{count}</span>
              </Chip>
            )
          })}
        </div>

        <LeadPipeline
          leads={filteredLeads}
          selectedIds={selectedIds}
          onToggleSelect={toggleSelect}
          onEdit={(l) => { setEditLead(l); setShowAdd(true) }}
          onMessage={(l) => setMessageLead(l)}
          onChangeStatus={changeStatus}
          onDelete={requestDeleteLead}
          onOpenDetail={(l) => setDetailLead(l)}
          emptyHint={state.leads.length === 0
            ? 'Comece adicionando seu primeiro lead — ou clique em "Caçar Leads" pra buscar imobiliárias, advogados e construtoras no Google Maps.'
            : 'Nenhum lead com esse filtro.'}
        />
      </main>

      {showAdd && (
        <AddLeadModal
          initial={editLead}
          onClose={() => { setShowAdd(false); setEditLead(null) }}
          onSave={(lead) => { upsertLead(lead); setShowAdd(false); setEditLead(null) }}
        />
      )}
      {showFinder && (
        <FinderPanel
          existingLeads={state.leads}
          onBulkAdd={bulkAddLeads}
          onClose={() => setShowFinder(false)}
        />
      )}
      {messageLead && (
        <MessageModal
          lead={messageLead}
          onClose={() => setMessageLead(null)}
          onSent={(text) => { markAsContacted(messageLead, text); setMessageLead(null) }}
        />
      )}
      {detailLead && (
        <LeadDetailModal
          lead={state.leads.find((l) => l.id === detailLead.id) || detailLead}
          onClose={() => setDetailLead(null)}
          onEdit={() => { setEditLead(detailLead); setDetailLead(null); setShowAdd(true) }}
          onMessage={() => { setMessageLead(detailLead); setDetailLead(null) }}
          onChangeStatus={(s) => changeStatus(detailLead, s)}
          onAddNote={(text) => {
            const now = new Date().toISOString()
            const lead = state.leads.find((l) => l.id === detailLead.id)
            if (!lead) return
            upsertLead({
              ...lead,
              lastInteractionAt: now,
              interactions: [...(lead.interactions || []), { date: now, type: 'note', text }],
            })
          }}
        />
      )}

      <BulkActionsBar
        count={selectedIds.size}
        totalVisible={filteredLeads.length}
        onSelectAllVisible={selectAllVisible}
        onChangeStatus={bulkChangeStatus}
        onDelete={requestBulkDelete}
        onClear={clearSelection}
      />

      <ConfirmDialog
        open={!!confirmState}
        title={confirmState?.title}
        message={confirmState?.message}
        confirmLabel={confirmState?.confirmLabel}
        danger={confirmState?.danger}
        onConfirm={confirmState?.onConfirm}
        onCancel={() => setConfirmState(null)}
      />
    </div>
  )
}

function Chip({ active, onClick, children, accent }) {
  const base = 'px-3 py-1.5 rounded-full text-xs font-medium border transition whitespace-nowrap inline-flex items-center gap-1.5'
  if (active) {
    if (accent === 'amber') return <button onClick={onClick} className={`${base} bg-dourado/90 text-white border-dourado`}>{children}</button>
    return <button onClick={onClick} className={`${base} bg-verde text-white border-verde shadow-sm shadow-verde/20`}>{children}</button>
  }
  return <button onClick={onClick} className={`${base} bg-white dark:bg-grafite text-grafite/70 dark:text-white/70 border-cinza-dark dark:border-white/10 hover:border-verde dark:hover:border-verde-300 hover:text-verde dark:hover:text-verde-300`}>{children}</button>
}

function mergeStates(current, incoming) {
  const map = new Map(current.leads.map((l) => [l.id, l]))
  for (const l of incoming.leads) {
    map.set(l.id, l)
  }
  return { ...current, leads: Array.from(map.values()) }
}
