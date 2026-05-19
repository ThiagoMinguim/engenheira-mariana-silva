import { motion } from 'framer-motion'
import MagnifyingGlassLogo from './MagnifyingGlassLogo'
import { trackWhatsAppClick } from '../lib/gtag'
import { getWhatsAppUrl, whatsappMessages } from '../lib/whatsapp'

export default function HeroProfessional() {
  return (
    <section id="home" className="relative pt-[75px] overflow-hidden">
      {/* 1. Background base */}
      <div className="absolute inset-0 bg-grafite-dark" />

      {/* 2. Video background — visível no lado esquerdo, some no direito */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        style={{ maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 60%)', WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 60%)' }}
      >
        <source src="/hf_20260519_015214_1cf88ccd-3aff-4b2f-8079-c555c87ca59e.mp4" type="video/mp4" />
      </video>

      {/* 3. Overlay — leve na esquerda pra ver o vídeo, forte na direita pra foto limpa */}
      <div className="absolute inset-0 bg-gradient-to-r from-grafite-dark/30 via-grafite-dark/60 to-grafite-dark/95" />

      {/* Floating decorative blobs (sutis sobre o overlay) */}
      <div className="absolute top-20 right-[-5%] w-[400px] h-[400px] bg-verde-900/30 rounded-full filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-60 left-[-8%] w-[350px] h-[350px] bg-verde-800/20 rounded-full filter blur-3xl opacity-15 animate-blob-delayed" />
      <div className="absolute bottom-40 right-[20%] w-[300px] h-[300px] bg-verde-700/15 rounded-full filter blur-3xl opacity-15 animate-blob-slow" />

      {/* Watermark logo */}
      <div className="absolute right-[-5%] top-[15%] opacity-[0.03] pointer-events-none z-[1]">
        <MagnifyingGlassLogo size={500} className="text-verde" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 md:py-24 lg:py-28">
          {/* Text */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-semibold text-[clamp(2.2rem,5vw,3.5rem)] text-white leading-[1.12] tracking-tight"
            >
              Diagnóstico preciso{' '}
              <br className="hidden md:block" />
              para construções{' '}
              <br className="hidden md:block" />
              <span className="relative inline-block">
                mais seguras.
                {/* Underline accent */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 w-full h-[3px] bg-dourado origin-left rounded-full"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-body text-lg text-white/60 leading-relaxed max-w-lg"
            >
              Vistorias, inspeções e laudos técnicos para identificar problemas, orientar soluções e trazer mais segurança para imóveis, reformas e construções.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                id="whatsapp-hero"
                href={getWhatsAppUrl(whatsappMessages.google)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('whatsapp-hero')}
                className="shimmer-btn group px-8 py-3.5 bg-verde text-white font-body font-semibold text-sm rounded-lg hover:bg-verde-600 transition-all duration-300 shadow-lg shadow-verde/20 hover:shadow-xl hover:shadow-verde/30 flex items-center gap-2"
              >
                Solicitar orçamento pelo WhatsApp
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="group px-8 py-3.5 text-verde-300 font-body font-semibold text-sm rounded-lg border-2 border-verde-300 hover:bg-verde hover:text-white hover:border-verde transition-all duration-300 flex items-center gap-2"
              >
                Nossos serviços
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25 12 15.75 4.5 8.25" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main photo */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-black/40 group">
              <img
                src="/mari2.png"
                alt="Engenheira Mariana Silva"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-grafite/20 via-transparent to-transparent" />
            </div>

            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-dourado/20" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-dourado/30 rounded-tl-2xl" />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-5 -left-5 bg-grafite rounded-xl shadow-xl shadow-black/30 px-5 py-3 z-20 animate-float-slow"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-verde rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <p className="font-heading text-[11px] font-semibold text-white">CREA Ativo</p>
                  <p className="font-body text-[9px] text-white/40">Eng. Civil</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
