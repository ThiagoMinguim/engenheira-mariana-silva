import { motion } from 'framer-motion'
import { FaGlassCheers } from 'react-icons/fa'

export default function CelebrationButton({ onClick }) {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-b from-[#0f0c29] to-[#0f0c29]">
      <div className="text-center">
        <motion.button
          onClick={onClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold text-lg rounded-full shadow-xl shadow-gold-500/30 hover:shadow-gold-500/50 transition-shadow duration-300 overflow-hidden"
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

          <FaGlassCheers className="text-xl" />
          <span className="relative">Celebrar!</span>
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 text-sm mt-4"
        >
          Clique para soltar os confetes!
        </motion.p>
      </div>
    </section>
  )
}
