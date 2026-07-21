import { motion } from 'framer-motion'
import { trackWhatsAppClick } from '../lib/gtag'
import { getWhatsAppUrl, whatsappMessages } from '../lib/whatsapp'

const problemas = [
  { img: 'desplacamento-fachada', label: 'Desplacamento de fachada' },
  { img: 'umidade', label: 'Umidade' },
  { img: 'fissuras', label: 'Fissuras, trincas e rachaduras' },
  { img: 'lixiviacao', label: 'Lixiviação por infiltração' },
  { img: 'infiltracao-gesso', label: 'Infiltração em forros de gesso' },
  { img: 'eflorescencia', label: 'Eflorescência' },
  { img: 'deslocamento-ceramica', label: 'Deslocamento de cerâmica' },
  { img: 'falha-lajes', label: 'Falha na manutenção de lajes' },
  { img: 'vazamento-piscinas', label: 'Vazamento em piscinas' },
  { img: 'corrosao-armaduras', label: 'Corrosão de armaduras' },
  { img: 'corrosao-vapor', label: 'Corrosão decorrente de vapor' },
]

export default function ProblemasSection() {
  return (
    <section id="problemas" className="py-24 relative overflow-hidden bg-white dark:bg-grafite-dark noise-overlay">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <span className="font-body text-verde dark:text-verde-300 font-semibold text-xs uppercase tracking-[0.2em]">
            Diagnóstico de patologias
          </span>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-grafite dark:text-white mt-3 leading-tight">
            Você identifica algum desses <span className="text-verde dark:text-verde-300">problemas</span> na sua edificação?
          </h2>
          <div className="w-16 h-[3px] bg-dourado mx-auto mt-6 rounded-full" />
          <p className="font-body text-grafite/55 dark:text-white/45 mt-6 text-base">
            Essas são manifestações patológicas comuns em imóveis e construções. Identificar a causa cedo evita
            reparos caros e protege a segurança da edificação.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto">
          {problemas.map((p, i) => (
            <motion.div
              key={p.img}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: (i % 4) * 0.06, duration: 0.5 }}
              className="card-lift group relative rounded-2xl overflow-hidden border border-cinza-dark/30 dark:border-white/8 bg-white dark:bg-[#22262b] shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={`/patologias/${p.img}.webp`}
                  alt={p.label}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradiente para leitura do rótulo */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-grafite-dark/95 via-grafite-dark/50 to-transparent" />
                {/* Rótulo */}
                <div className="absolute inset-x-0 bottom-0 p-3.5">
                  <span className="block h-[2px] w-8 bg-dourado mb-2 transition-all duration-500 group-hover:w-14" />
                  <h3 className="font-heading font-semibold text-sm md:text-[15px] text-white leading-tight">
                    {p.label}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="font-body text-grafite/60 dark:text-white/50 mb-5">
            Identificou algum desses problemas no seu imóvel?
          </p>
          <a
            id="whatsapp-problemas"
            href={getWhatsAppUrl(whatsappMessages.patologia)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('whatsapp-problemas')}
            className="shimmer-btn inline-flex items-center gap-2 px-8 py-3.5 bg-verde text-white font-body font-semibold text-sm rounded-xl hover:bg-verde-600 transition-all duration-300 shadow-lg shadow-verde/20 hover:shadow-xl hover:shadow-verde/30 group"
          >
            Enviar uma foto pelo WhatsApp
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
