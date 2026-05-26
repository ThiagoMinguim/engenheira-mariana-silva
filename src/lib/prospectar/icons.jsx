import {
  Target,
  Send,
  MessageCircle,
  CalendarCheck,
  Trophy,
  XCircle,
  AlarmClock,
  Building2,
  Scale,
  HardHat,
  Building,
  Shield,
  Compass,
  Tag,
} from 'lucide-react'

const STATUS_ICONS = {
  pending: Target,
  contacted: Send,
  responding: MessageCircle,
  meeting: CalendarCheck,
  closed: Trophy,
  not_interested: XCircle,
  follow_up: AlarmClock,
}

const CATEGORY_ICONS = {
  imobiliaria: Building2,
  advogado: Scale,
  construtora: HardHat,
  condominio: Building,
  seguradora: Shield,
  arquiteto: Compass,
  outro: Tag,
}

export function StatusIcon({ id, className = 'w-3.5 h-3.5', strokeWidth = 2 }) {
  const Cmp = STATUS_ICONS[id] || Target
  return <Cmp className={className} strokeWidth={strokeWidth} />
}

export function CategoryIcon({ id, className = 'w-4 h-4', strokeWidth = 1.75 }) {
  const Cmp = CATEGORY_ICONS[id] || Tag
  return <Cmp className={className} strokeWidth={strokeWidth} />
}
