import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0c29] via-[#1a1a3e] to-[#24243e] -z-10" />

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />

      {/* Graduation cap icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
        className="mb-8"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gold-400/20 rounded-full blur-xl animate-glow" />
          <div className="relative bg-gradient-to-br from-gold-400 to-gold-600 p-6 rounded-full shadow-2xl">
            <FaGraduationCap className="text-5xl md:text-7xl text-white" />
          </div>
        </div>
      </motion.div>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4"
      >
        Parabéns,{' '}
        <span className="gradient-text">Mariana!</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="space-y-3"
      >
        <p className="text-xl md:text-2xl text-gold-200 font-light tracking-wide">
          Agora é oficialmente
        </p>
        <div className="inline-block">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 1.2 }}
            className="overflow-hidden"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gold-400 whitespace-nowrap">
              Engenheira!
            </h2>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mt-8"
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gold-400/60"
        >
          <span className="text-sm mb-2 tracking-widest uppercase">Role para baixo</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
