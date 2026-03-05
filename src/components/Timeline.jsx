import { motion } from 'framer-motion'

const milestones = [
  {
    period: 'Início',
    title: 'O primeiro dia',
    description: 'Cheia de sonhos e expectativas, começou a jornada na Engenharia. Um passo corajoso que mudou tudo.',
  },
  {
    period: 'Meio do caminho',
    title: 'Os desafios',
    description: 'Cálculos, projetos, madrugadas de estudo... Cada obstáculo superado te fez mais forte.',
  },
  {
    period: 'Reta final',
    title: 'TCC e provas finais',
    description: 'A pressão aumentou, mas você nunca desistiu. Mostrou que determinação vence qualquer dificuldade.',
  },
  {
    period: 'Agora',
    title: 'Formatura!',
    description: 'Hoje você colhe tudo o que plantou. Engenheira formada, pronta para conquistar o mundo!',
  },
]

export default function Timeline() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[#1a1a2e] to-[#16213e]">
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
          A <span className="gradient-text">Trajetória</span>
        </h2>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
      </motion.div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-400/50 via-gold-400 to-gold-400/50 md:-translate-x-0.5" />

        {milestones.map((item, index) => {
          const isLeft = index % 2 === 0

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`relative flex items-center mb-12 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gold-400 rounded-full border-4 border-[#1a1a2e] -translate-x-1/2 z-10 shadow-lg shadow-gold-400/30" />

              {/* Content card */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-gold-400/30 transition-colors"
                >
                  <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
                    {item.period}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
