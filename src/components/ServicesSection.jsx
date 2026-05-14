import { motion } from 'framer-motion'
import { HiEye, HiClipboardCheck, HiDocumentText, HiCog, HiScale, HiSupport } from 'react-icons/hi'
import MagnifyingGlassLogo from './MagnifyingGlassLogo'

export default function ServicesSection() {
  const services = [
    {
      icon: <HiEye className="w-7 h-7" />,
      title: "Vistorias",
      items: [
        "Vistoria Cautelar de Vizinhança",
        "Vistoria de Acompanhamento de Obra",
        "Vistoria de Imóvel Novo",
        "Vistoria de Recebimento de Obra",
        "Vistoria Locativa",
        "Vistoria de Garantia"
      ],
    },
    {
      icon: <HiClipboardCheck className="w-7 h-7" />,
      title: "Inspeção",
      items: [
        "Inspeção Predial",
        "Inspeção Residencial",
        "Inspeção Comercial",
        "Inspeção de Fachada"
      ],
    },
    {
      icon: <HiDocumentText className="w-7 h-7" />,
      title: "Laudos",
      items: [
        "Laudo Técnico de Inspeção Predial",
        "Laudo Técnico de Vistoria",
        "Laudo Técnico de Fachada",
        "Laudo Técnico de Perícia",
        "Laudo Técnico para Reforma"
      ],
    },
    {
      icon: <HiSupport className="w-7 h-7" />,
      title: "Assistência Técnica",
      items: [
        "Acompanhamento técnico especializado",
        "Suporte em todas as fases do projeto",
        "Orientação técnica profissional"
      ],
    },
    {
      icon: <HiScale className="w-7 h-7" />,
      title: "Perícia em Ações Judiciais",
      items: [
        "Perícia técnica judicial",
        "Laudos periciais",
        "Assistência técnica em processos"
      ],
    },
    {
      icon: <HiCog className="w-7 h-7" />,
      title: "Plano de Manutenção Predial",
      items: [
        "Planejamento de manutenção preventiva",
        "Cronograma de manutenções",
        "Gestão de vida útil do imóvel"
      ],
    }
  ]

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background with concrete texture */}
      <div className="absolute inset-0 concrete-texture" />

      {/* Watermark */}
      <div className="absolute left-[-8%] bottom-[-5%] opacity-[0.02] pointer-events-none">
        <MagnifyingGlassLogo size={600} className="text-verde" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-verde font-semibold text-xs uppercase tracking-[0.2em]">
            O que eu faço
          </span>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-grafite mt-3">
            Serviços Especializados
          </h2>
          <div className="w-16 h-[3px] bg-dourado mx-auto mt-6 rounded-full" />
          <p className="font-body text-grafite/55 mt-6 max-w-2xl mx-auto text-base">
            Soluções técnicas sob medida para diagnosticar, prevenir e orientar com segurança.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="card-lift bg-white p-8 rounded-2xl border border-cinza-dark/30 group relative overflow-hidden"
            >
              {/* Top gradient accent — hidden until hover */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-dourado scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Shimmer sweep on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-verde/[0.03] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-verde/10 rounded-2xl flex items-center justify-center text-verde mb-6 group-hover:bg-verde group-hover:text-white group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-verde/20">
                  {service.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg text-grafite mb-2 group-hover:text-verde transition-colors duration-300">
                  {service.title}
                </h3>
                <div className="w-8 h-[2px] bg-dourado/40 mb-4 group-hover:w-12 transition-all duration-500" />
                <ul className="space-y-2.5">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="font-body text-sm text-grafite/55 flex items-start gap-2.5">
                      <span className="text-verde mt-[7px] flex-shrink-0">
                        <svg className="w-[6px] h-[6px]" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </span>
                      <span className="group-hover:text-grafite/70 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/message/CVTWOWWWB553G1"
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn inline-flex items-center gap-2 px-10 py-4 bg-verde text-white font-body font-semibold text-sm rounded-xl hover:bg-verde-600 transition-all duration-300 shadow-lg shadow-verde/20 hover:shadow-xl hover:shadow-verde/30 group"
          >
            Solicitar orçamento
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
