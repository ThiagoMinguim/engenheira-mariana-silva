import { motion } from 'framer-motion'
import { HiCheckCircle, HiShieldCheck, HiUserGroup } from 'react-icons/hi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function AboutSection() {
  const values = [
    {
      icon: <HiCheckCircle className="w-8 h-8" />,
      title: 'Qualidade',
      desc: 'Diagnósticos e laudos fundamentados, ensaios precisos e total conformidade com as normas técnicas vigentes, garantindo soluções assertivas para a saúde da sua edificação.',
    },
    {
      icon: <HiShieldCheck className="w-8 h-8" />,
      title: 'Segurança',
      desc: 'Identificação precoce de manifestações patológicas e falhas estruturais, garantindo a integridade física dos usuários e a estabilidade da edificação.',
    },
    {
      icon: <HiUserGroup className="w-8 h-8" />,
      title: 'Compromisso',
      desc: 'Compromisso em traduzir a complexidade técnica em soluções claras, oferecendo suporte contínuo para que o cliente tome decisões seguras e econômicas sobre seu patrimônio.',
    },
  ]

  return (
    <section id="about" className="py-24 bg-white noise-overlay relative overflow-hidden">
      {/* Decorative building silhouettes */}
      <div className="absolute top-0 left-0 w-40 h-full opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 160 600" fill="none" className="w-full h-full text-verde">
          {/* Dot grid */}
          {[...Array(8)].map((_, row) =>
            [...Array(4)].map((_, col) => (
              <circle key={`${row}-${col}`} cx={20 + col * 18} cy={40 + row * 18} r="2" fill="currentColor" />
            ))
          )}
          {/* Vertical lines suggesting building */}
          <rect x="60" y="180" width="2" height="420" fill="currentColor" opacity="0.5" />
          <rect x="80" y="220" width="2" height="380" fill="currentColor" opacity="0.3" />
          <rect x="100" y="260" width="2" height="340" fill="currentColor" opacity="0.4" />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-64 h-full opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 260 600" fill="none" className="w-full h-full text-verde">
          {/* Building outlines */}
          <rect x="180" y="60" width="60" height="540" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect x="140" y="140" width="50" height="460" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="100" y="200" width="50" height="400" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
          {/* Window patterns */}
          {[...Array(12)].map((_, i) => (
            <rect key={`w1-${i}`} x="192" y={90 + i * 40} width="12" height="8" rx="1" fill="currentColor" opacity="0.3" />
          ))}
          {[...Array(12)].map((_, i) => (
            <rect key={`w2-${i}`} x="216" y={90 + i * 40} width="12" height="8" rx="1" fill="currentColor" opacity="0.3" />
          ))}
          {/* Curved decorative line */}
          <path d="M 40 300 Q 80 250 120 300 Q 160 350 200 300" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
          <path d="M 20 350 Q 60 300 100 350 Q 140 400 180 350" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section title */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-14"
          >
            {/* Label with decorative lines */}
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-4">
              <span className="w-16 h-[1px] bg-grafite/20" />
              <span className="font-body text-verde font-semibold text-xs uppercase tracking-[0.25em]">
                Sobre mim
              </span>
              <span className="w-16 h-[1px] bg-grafite/20" />
            </motion.div>

            {/* Diamond ornament */}
            <motion.div variants={fadeUp} custom={0.5} className="flex justify-center mb-5">
              <span className="w-2.5 h-2.5 bg-verde rotate-45 inline-block" />
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={fadeUp} custom={1} className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl text-grafite">
              Engenharia com <span className="italic">Excelência</span>
            </motion.h2>

            {/* Green divider */}
            <motion.div variants={fadeUp} custom={1.5} className="w-16 h-[3px] bg-gradient-to-r from-verde to-verde-light mx-auto mt-6 rounded-full" />
          </motion.div>

          {/* Bio text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-body text-lg text-grafite/60 leading-relaxed text-center max-w-3xl mx-auto mb-16"
          >
            Sou Mariana Silva, Engenheira Civil especializada em Engenharia Diagnóstica.
            Comprometida em identificar patologias, avaliar o desempenho das edificações e
            fornecer análises técnicas confiáveis por meio de vistorias, inspeções prediais e laudos
            em imóveis residenciais, comerciais e industriais.
          </motion.p>

          {/* Value cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="card-lift text-center p-8 bg-white border border-cinza-dark/30 rounded-2xl group relative overflow-hidden"
              >
                {/* Green gradient line at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-verde to-verde-light" />

                {/* Icon circle */}
                <div className="w-20 h-20 bg-verde/[0.08] rounded-full flex items-center justify-center mx-auto mb-6 text-verde group-hover:bg-verde group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-verde/20">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-xl text-grafite mb-3 group-hover:text-verde transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Decorative dot */}
                <div className="w-1.5 h-1.5 bg-verde/40 rounded-full mx-auto mb-4" />

                {/* Description */}
                <p className="font-body text-sm text-grafite/55 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
