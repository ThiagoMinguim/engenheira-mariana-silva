import { motion } from 'framer-motion'
import MagnifyingGlassLogo from './MagnifyingGlassLogo'
import { trackWhatsAppClick } from '../lib/gtag'
import { getWhatsAppUrl, whatsappMessages } from '../lib/whatsapp'

export default function FooterProfessional() {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Por que investir?', href: '#investir' },
    { label: 'Contato', href: '#contact' },
  ]

  const socials = [
    {
      name: 'WhatsApp',
      url: getWhatsAppUrl(whatsappMessages.site),
      trackingId: 'whatsapp-footer',
      icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />,
    },
    {
      name: '@eng_marianasilva',
      url: 'https://www.instagram.com/eng_marianasilva/',
      icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />,
    },
    {
      name: 'engmarianasilva@gmail.com',
      url: 'https://mail.google.com/mail/?view=cm&to=engmarianasilva@gmail.com',
      icon: <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />,
    },
  ]

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-[#111316] border-t border-cinza-dark/50 dark:border-white/10">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dourado/30 to-transparent" />

      {/* Watermark */}
      <div className="absolute right-[-5%] top-[-10%] opacity-[0.025] dark:opacity-[0.02] pointer-events-none">
        <MagnifyingGlassLogo size={400} className="text-verde dark:text-white" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <picture>
                <source type="image/webp" srcSet="/logo.webp" />
                <img
                  src="/logo-168.png"
                  alt="Mariana Silva"
                  width={168}
                  height={168}
                  loading="lazy"
                  className="h-10 w-auto object-contain dark:brightness-0 dark:invert"
                />
              </picture>
              <div className="border-l border-verde/20 dark:border-white/15 pl-3">
                <span className="font-heading font-bold text-sm tracking-[0.08em] text-grafite dark:text-white block leading-tight uppercase">
                  Mariana Silva
                </span>
                <span className="font-heading text-[9px] tracking-[0.2em] text-verde dark:text-verde-light block leading-tight uppercase">
                  Engenharia Diagnóstica
                </span>
              </div>
            </div>
            <p className="font-body text-sm text-grafite/55 dark:text-white/40 leading-relaxed max-w-xs">
              Precisão técnica para construções mais seguras.
            </p>
          </motion.div>

          {/* Links column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="font-heading font-semibold text-xs text-grafite/80 dark:text-white/80 mb-6 tracking-[0.15em] uppercase">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-grafite/55 dark:text-white/40 hover:text-verde dark:hover:text-verde-light transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-verde dark:bg-verde-light transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="font-heading font-semibold text-xs text-grafite/80 dark:text-white/80 mb-6 tracking-[0.15em] uppercase">
              Contato
            </h4>
            <div className="space-y-4">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={s.trackingId}
                  onClick={s.name === 'WhatsApp' ? () => trackWhatsAppClick(s.trackingId) : undefined}
                  className="flex items-center gap-3 text-grafite/55 dark:text-white/40 hover:text-verde dark:hover:text-verde-light transition-all duration-300 group"
                >
                  <svg className="w-4 h-4 text-verde/70 dark:text-verde-light/70 group-hover:text-verde dark:group-hover:text-verde-light group-hover:scale-110 transition-all duration-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    {s.icon}
                  </svg>
                  <span className="font-body text-sm">{s.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cinza-dark/60 dark:border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-body text-xs text-grafite/40 dark:text-white/30">
              &copy; {currentYear} Mariana Silva — Engenharia Diagnóstica. Todos os direitos reservados.
            </p>
            <p className="font-body text-xs text-grafite/35 dark:text-white/20">
              CREA — Conselho Regional de Engenharia e Agronomia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
