import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const navItems = [
    { label: 'Início', id: 'home' },
    { label: 'Sobre', id: 'about' },
    { label: 'Serviços', id: 'services' },
    { label: 'Por que investir?', id: 'investir' },
    { label: 'Contato', id: 'contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_30px_rgba(47,111,78,0.08)]'
          : 'bg-white'
      }`}
    >
      {/* Top accent — thin verde line */}
      <div className="h-[3px] bg-gradient-to-r from-verde via-verde-light to-verde" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 group"
          >
            <img
              src="/logo.png"
              alt="Mariana Silva"
              className="h-[56px] w-auto object-contain"
            />
            <div className="border-l-[2px] border-verde/30 pl-3">
              <span className="font-heading font-bold text-[17px] tracking-[0.08em] text-grafite block leading-tight uppercase">
                Mariana Silva
              </span>
              <span className="font-heading text-[10px] tracking-[0.22em] text-verde font-semibold block leading-tight uppercase">
                Engenharia Diagnóstica
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                onClick={() => scrollToSection(item.id)}
                className="font-body text-[13px] font-medium text-grafite/80 hover:text-verde transition-colors duration-300 relative group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-verde rounded-full group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}

            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              href="https://wa.me/message/CVTWOWWWB553G1"
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn ml-3 px-6 py-2.5 bg-verde text-white font-body font-semibold text-[13px] rounded-lg hover:bg-verde-600 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-verde/20"
            >
              Solicitar diagnóstico
            </motion.a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-grafite hover:text-verde transition-colors rounded-lg hover:bg-cinza"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t border-cinza"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left font-body text-sm text-grafite hover:text-verde hover:bg-verde/5 py-3 px-4 rounded-lg transition-all"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <a
                  href="https://wa.me/message/CVTWOWWWB553G1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center mt-3 px-6 py-3 bg-verde text-white font-body font-semibold text-sm rounded-lg"
                >
                  Solicitar diagnóstico
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
