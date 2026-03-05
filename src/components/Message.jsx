import { motion } from 'framer-motion'
import { FaHeart, FaQuoteLeft } from 'react-icons/fa'

export default function Message() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[#16213e] to-[#0f0c29] overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Card */}
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-gold-400/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Quote icon */}
            <FaQuoteLeft className="text-gold-400/30 text-4xl mb-6" />

            {/* Message text */}
            <div className="space-y-4 text-gray-300 leading-relaxed text-lg md:text-xl font-light">
              <p>
                <span className="text-white font-medium">Mari,</span> eu não poderia estar mais orgulhoso de você.
              </p>
              <p>
                Acompanhei de perto cada etapa dessa jornada. Vi você estudar quando tudo parecia difícil,
                vi você chorar de cansaço e depois levantar mais forte. Vi você crescer, amadurecer e se
                transformar nessa mulher incrível que você é.
              </p>
              <p>
                Você não conquistou apenas um diploma — você conquistou o respeito de todos que te conhecem.
                Você provou que é capaz de tudo que sonhar.
              </p>
              <p className="text-gold-300 font-serif text-xl md:text-2xl italic pt-4">
                Eu te amo e tenho muito orgulho de ser seu parceiro nessa vida.
              </p>
            </div>

            {/* Heart */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="flex justify-center mt-8"
            >
              <FaHeart className="text-3xl text-red-500" />
            </motion.div>

            {/* Signature */}
            <p className="text-right text-gold-400 font-serif italic text-lg mt-6">
              Com todo meu amor
            </p>

            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold-400/30 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold-400/30 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold-400/30 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold-400/30 rounded-br-lg" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
