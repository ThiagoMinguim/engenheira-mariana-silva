import { motion } from 'framer-motion'
import { FaHeart, FaGraduationCap } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative py-16 px-4 bg-[#0f0c29] text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        {/* Graduation cap */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-block"
        >
          <FaGraduationCap className="text-4xl text-gold-400 mx-auto" />
        </motion.div>

        {/* Name */}
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">
          Engenheira <span className="gradient-text">Mariana</span>
        </h3>

        {/* Year */}
        <p className="text-gold-400/60 text-sm tracking-widest uppercase">
          Turma de {year}
        </p>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent mx-auto" />

        {/* Made with love */}
        <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
          Feito com <FaHeart className="text-red-500 text-xs" /> para a mulher da minha vida
        </p>
      </motion.div>
    </footer>
  )
}
