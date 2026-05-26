import { useMemo } from 'react'
import { daysSince } from '../../lib/prospectar/storage'

export default function StatsBar({ leads }) {
  const stats = useMemo(() => {
    const total = leads.length
    const contactedToday = leads.filter((l) => l.contactedAt && daysSince(l.contactedAt) === 0).length
    const contactedWeek = leads.filter((l) => l.contactedAt && daysSince(l.contactedAt) <= 7).length
    const responding = leads.filter((l) => ['responding', 'meeting'].includes(l.status)).length
    const closed = leads.filter((l) => l.status === 'closed').length
    const contacted = leads.filter((l) => l.contactedAt).length
    const responseRate = contacted ? Math.round((responding + closed) / contacted * 100) : 0
    return { total, contactedToday, contactedWeek, responding, closed, responseRate }
  }, [leads])

  const cards = [
    { label: 'Leads totais', value: stats.total, accent: 'text-grafite dark:text-white' },
    { label: 'Contactados hoje', value: stats.contactedToday, accent: 'text-blue-600 dark:text-blue-300', hint: 'meta: 5/dia' },
    { label: 'Contactados na semana', value: stats.contactedWeek, accent: 'text-verde dark:text-verde-300' },
    { label: 'Em conversa / reunião', value: stats.responding, accent: 'text-purple-600 dark:text-purple-300' },
    { label: 'Fechados', value: stats.closed, accent: 'text-emerald-600 dark:text-emerald-300' },
    { label: 'Taxa de resposta', value: `${stats.responseRate}%`, accent: 'text-dourado dark:text-dourado-light' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {cards.map((c) => (
        <div key={c.label} className="bg-white dark:bg-grafite rounded-xl border border-cinza-dark/30 dark:border-white/10 p-4 relative overflow-hidden">
          <p className="text-[10px] uppercase tracking-[0.15em] text-grafite/45 dark:text-white/40 font-semibold">{c.label}</p>
          <p className={`mt-2 font-heading font-bold text-2xl ${c.accent}`}>{c.value}</p>
          {c.hint && <p className="text-[10px] text-grafite/40 dark:text-white/30 mt-1">{c.hint}</p>}
        </div>
      ))}
    </div>
  )
}
