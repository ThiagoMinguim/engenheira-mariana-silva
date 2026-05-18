import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { trackWhatsAppClick } from '../lib/gtag'
import { getWhatsAppUrl, whatsappMessages } from '../lib/whatsapp'

export default function Header({ dark, toggleTheme }) {
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
          ? 'bg-white/95 dark:bg-grafite-dark/95 backdrop-blur-md shadow-[0_4px_30px_rgba(47,111,78,0.08)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-white dark:bg-grafite-dark'
      }`}
    >
      {/* Top accent — thin verde line */}
      <div className="h-[3px] bg-dourado" />

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
              className="h-[56px] w-auto object-contain dark:brightness-0 dark:invert"
            />
            <div className="border-l-[2px] border-verde/30 pl-3">
              <span className="font-heading font-bold text-[17px] tracking-[0.08em] text-grafite dark:text-white block leading-tight uppercase">
                Mariana Silva
              </span>
              <span className="font-heading text-[10px] tracking-[0.22em] text-verde dark:text-verde-300 font-semibold block leading-tight uppercase">
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
                className="font-body text-[13px] font-medium text-grafite/80 dark:text-white/70 hover:text-verde dark:hover:text-verde-300 transition-colors duration-300 relative group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-verde dark:bg-verde-300 rounded-full group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}

            {/* Theme toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.75 }}
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-grafite/70 dark:text-white/70 hover:text-verde dark:hover:text-verde-300 hover:bg-cinza dark:hover:bg-white/10 transition-all duration-300"
              aria-label={dark ? 'Ativar tema claro' : 'Ativar tema escuro'}
            >
              {dark ? (
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </motion.button>

            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              href={getWhatsAppUrl(whatsappMessages.google)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('whatsapp-header')}
              className="shimmer-btn ml-3 px-6 py-2.5 bg-verde text-white font-body font-semibold text-[13px] rounded-lg hover:bg-verde-600 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-verde/20"
            >
              Chamar no WhatsApp
            </motion.a>
          </nav>

          {/* Mobile: theme toggle + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center text-grafite dark:text-white/70 hover:text-verde dark:hover:text-verde-300 transition-colors rounded-lg hover:bg-cinza dark:hover:bg-white/10"
              aria-label={dark ? 'Ativar tema claro' : 'Ativar tema escuro'}
            >
              {dark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center text-grafite dark:text-white/70 hover:text-verde dark:hover:text-verde-300 transition-colors rounded-lg hover:bg-cinza dark:hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t border-cinza dark:border-white/10"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left font-body text-sm text-grafite dark:text-white/70 hover:text-verde dark:hover:text-verde-300 hover:bg-verde/5 dark:hover:bg-verde/10 py-3 px-4 rounded-lg transition-all"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <a
                  href={getWhatsAppUrl(whatsappMessages.google)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('whatsapp-header-mobile')}
                  className="block w-full text-center mt-3 px-6 py-3 bg-verde text-white font-body font-semibold text-sm rounded-lg"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
