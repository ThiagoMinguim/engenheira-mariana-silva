// Cada `searches` deve listar termos genéricos (sem cidade) — a cidade
// é anexada dinamicamente pelo FinderPanel com base no city picker.
// Mantenha cada termo realmente distinto (perfil de cliente diferente).
export const CATEGORIES = [
  {
    id: 'imobiliaria',
    label: 'Imobiliária',
    pitch: 'Vistorias de entrega/locação, laudos de garantia, suporte a vendas e locações.',
    searches: [
      'imobiliárias',
      'imobiliária especializada em locação',
      'imobiliária venda de imóvel',
      'corretor de imóveis',
    ],
  },
  {
    id: 'advogado',
    label: 'Advogado',
    pitch: 'Perícias judiciais, laudos técnicos para processos, assistência técnica em ações.',
    searches: [
      'advogado direito imobiliário',
      'advogado direito civil',
      'advogado direito do consumidor',
      'escritório de advocacia',
    ],
  },
  {
    id: 'construtora',
    label: 'Construtora',
    pitch: 'Vistoria cautelar de vizinhança, acompanhamento de obra, vistoria de entrega.',
    searches: [
      'construtoras',
      'incorporadora',
      'empreiteira',
    ],
  },
  {
    id: 'condominio',
    label: 'Síndico/Condomínio',
    pitch: 'Inspeção predial obrigatória, laudo de fachada, plano de manutenção preventiva.',
    searches: [
      'administradora de condomínio',
      'síndico profissional',
      'gestão condominial',
    ],
  },
  {
    id: 'seguradora',
    label: 'Seguradora/Corretor',
    pitch: 'Laudos para sinistros de imóvel, vistorias para apólice, perícias técnicas.',
    searches: [
      'corretora de seguros',
      'corretor de seguros patrimoniais',
      'seguro residencial',
    ],
  },
  {
    id: 'arquiteto',
    label: 'Arquiteto/Designer',
    pitch: 'Parceria em reformas: laudo prévio, vistoria pós-obra, assistência técnica.',
    searches: [
      'arquitetos',
      'escritório de arquitetura',
      'designer de interiores',
    ],
  },
  {
    id: 'outro',
    label: 'Outro',
    pitch: 'Outro tipo de cliente — personalize a mensagem.',
    searches: [],
  },
]

export const CATEGORY_MAP = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]))

export function googleMapsSearchUrl(query) {
  return `https://www.google.com/maps/search/${encodeURIComponent(query)}`
}
