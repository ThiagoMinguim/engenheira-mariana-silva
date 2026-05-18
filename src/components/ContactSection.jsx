import { motion } from 'framer-motion'
import { trackWhatsAppClick } from '../lib/gtag'

export default function ContactSection() {
  const socialLinks = [
    {
      name: 'WhatsApp',
      handle: 'Enviar mensagem',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      url: 'https://wa.me/553484262358?text=Oi%20Mariana%2C%20vi%20seu%20site%20e%20queria%20saber%20sobre%20vistoria',
      color: '#25D366',
    },
    {
      name: 'Instagram',
      handle: '@eng_marianasilva',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: 'https://www.instagram.com/eng_marianasilva/',
      color: '#E4405F',
    },
    {
      name: 'E-mail',
      handle: 'engmarianasilva@gmail.com',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      url: 'https://mail.google.com/mail/?view=cm&to=engmarianasilva@gmail.com',
      color: '#EA4335',
    }
  ]

  return (
    <section id="contact" className="py-24 bg-white dark:bg-grafite-dark blueprint-grid relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-body text-verde dark:text-verde-300 font-semibold text-xs uppercase tracking-[0.2em]">
              Entre em contato
            </span>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-grafite dark:text-white mt-3">
              Vamos Conversar
            </h2>
            <div className="w-16 h-[3px] bg-dourado mx-auto mt-6 rounded-full" />
            <p className="font-body text-grafite/55 dark:text-white/45 mt-6 max-w-2xl mx-auto">
              Tire suas dúvidas ou solicite um orçamento. Estou à disposição para ajudar!
            </p>
          </motion.div>

          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="concrete-texture p-8 md:p-12 rounded-3xl border border-verde/10 dark:border-white/8 relative overflow-hidden shadow-xl shadow-grafite/5 dark:shadow-black/20"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-dourado/25 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-dourado/25 rounded-br-3xl" />

            <div className="text-center mb-10 relative z-10">
              <h3 className="font-heading font-semibold text-2xl text-grafite dark:text-white mb-2">
                Conecte-se comigo
              </h3>
              <p className="font-body text-sm text-grafite/50 dark:text-white/40">
                Escolha a melhor forma de entrar em contato
              </p>
            </div>

            {/* Social cards */}
            <div className="grid md:grid-cols-3 gap-5 relative z-10">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={social.name === 'WhatsApp' ? trackWhatsAppClick : undefined}
                  className="card-lift flex flex-col items-center justify-center gap-3 p-8 bg-white dark:bg-[#22262b] rounded-2xl border border-cinza-dark/30 dark:border-white/8 group"
                  style={{ '--accent': social.color }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{
                      backgroundColor: `${social.color}10`,
                      color: social.color,
                    }}
                  >
                    <div className="group-hover:rotate-6 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </div>
                  <span className="font-heading font-semibold text-base text-grafite dark:text-white">{social.name}</span>
                  <span className="font-body text-xs text-grafite/40 dark:text-white/35">{social.handle}</span>
                </motion.a>
              ))}
            </div>

            {/* Info row */}
            <div className="mt-10 grid md:grid-cols-2 gap-5 relative z-10">
              <div className="flex items-start gap-4 p-6 bg-white dark:bg-[#22262b] rounded-xl border border-cinza-dark/30 dark:border-white/8 group hover:border-verde/20 dark:hover:border-verde/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-verde to-verde-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white shadow-md shadow-verde/20 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm text-grafite dark:text-white mb-1">Horário de Atendimento</h4>
                  <p className="font-body text-sm text-grafite/50 dark:text-white/40">Segunda a Sexta: 8h às 18h</p>
                  <p className="font-body text-sm text-grafite/50 dark:text-white/40">Sábado: 8h às 12h</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white dark:bg-[#22262b] rounded-xl border border-cinza-dark/30 dark:border-white/8 group hover:border-verde/20 dark:hover:border-verde/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-verde to-verde-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white shadow-md shadow-verde/20 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm text-grafite dark:text-white mb-1">Atendimento</h4>
                  <p className="font-body text-sm text-grafite/50 dark:text-white/40">Uberaba e região</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
