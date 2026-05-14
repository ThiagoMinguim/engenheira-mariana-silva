/**
 * Logo Mariana Silva — Lupa com monograma "Ms" e detalhe de fissura.
 * SVG fiel à identidade visual da marca.
 */
export default function MagnifyingGlassLogo({ size = 48, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* ── Lupa: anel da lente (duplo, como na identidade) ── */}
      <circle cx="85" cy="82" r="60" stroke="currentColor" strokeWidth="3" />
      <circle cx="85" cy="82" r="55" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />

      {/* ── Cabo da lupa — cilíndrico com detalhe ── */}
      {/* Sombra do cabo */}
      <line x1="130" y1="127" x2="172" y2="169" stroke="currentColor" strokeWidth="14" strokeLinecap="round" opacity="0.08" />
      {/* Corpo principal do cabo */}
      <line x1="130" y1="127" x2="170" y2="167" stroke="currentColor" strokeWidth="11" strokeLinecap="round" />
      {/* Highlight do cabo */}
      <line x1="131" y1="126" x2="168" y2="163" stroke="currentColor" strokeWidth="7" strokeLinecap="round" opacity="0.15" />
      {/* Anel conector lente-cabo */}
      <circle cx="127" cy="124" r="7" stroke="currentColor" strokeWidth="2.5" fill="none" />

      {/* ── Letra M — serifada clássica ── */}
      {/* Haste esquerda */}
      <line x1="52" y1="103" x2="52" y2="58" stroke="currentColor" strokeWidth="4.5" />
      {/* Serifa topo esquerda */}
      <line x1="46" y1="58" x2="58" y2="58" stroke="currentColor" strokeWidth="2" />
      {/* Serifa base esquerda */}
      <line x1="46" y1="103" x2="58" y2="103" stroke="currentColor" strokeWidth="2" />
      {/* Diagonal esquerda */}
      <line x1="52" y1="60" x2="75" y2="90" stroke="currentColor" strokeWidth="3.5" />
      {/* Diagonal direita */}
      <line x1="75" y1="90" x2="98" y2="60" stroke="currentColor" strokeWidth="3.5" />
      {/* Haste direita */}
      <line x1="98" y1="58" x2="98" y2="103" stroke="currentColor" strokeWidth="4.5" />
      {/* Serifa topo direita */}
      <line x1="92" y1="58" x2="104" y2="58" stroke="currentColor" strokeWidth="2" />
      {/* Serifa base direita */}
      <line x1="92" y1="103" x2="104" y2="103" stroke="currentColor" strokeWidth="2" />

      {/* ── Letra s — minúscula cursiva elegante ── */}
      <path
        d="M109 78 C116 72, 124 74, 121 80 C118 86, 108 87, 108 93 C108 99, 117 101, 123 96"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── Fissura / crack — elemento assinatura ── */}
      <path
        d="M72 44 L75 53 L71 60 L73 65"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
      {/* Ramificação da fissura */}
      <path
        d="M75 53 L78 56"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  )
}
