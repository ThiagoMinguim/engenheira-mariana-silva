import { motion } from 'framer-motion'
import { FaStar, FaHeart, FaRocket } from 'react-icons/fa'

const qualities = [
  {
    icon: FaStar,
    title: 'Dedicação',
    description: 'Noites em claro, trabalhos, provas... Cada esforço valeu a pena. Você se dedicou como ninguém!',
  },
  {
    icon: FaHeart,
    title: 'Paixão',
    description: 'A forma como você ama o que faz é inspiradora. Engenharia não era só um curso, era o seu sonho.',
  },
  {
    icon: FaRocket,
    title: 'Futuro Brilhante',
    description: 'O mundo precisa de engenheiras como você. O melhor ainda está por vir, e eu estarei do seu lado.',
  },
]

export default function About() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[#24243e] to-[#1a1a2e]">
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
          Uma jornada <span className="gradient-text">incrível</span>
        </h2>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
      </motion.div>

      {/* Cards grid */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {qualities.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-gold-400/30 transition-colors duration-500">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl mb-6 shadow-lg shadow-gold-500/20">
                <item.icon className="text-2xl text-white" />
              </div>

              <h3 className="font-serif text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
