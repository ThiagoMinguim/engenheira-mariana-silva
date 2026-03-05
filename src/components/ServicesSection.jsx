import { HiDocumentText, HiOfficeBuilding, HiClipboardCheck, HiBriefcase, HiHome, HiPencilAlt } from 'react-icons/hi'

export default function ServicesSection() {
  const services = [
    {
      icon: <HiDocumentText className="w-10 h-10" />,
      title: "Projetos Estruturais",
      description: "Desenvolvimento completo de projetos estruturais para edificações residenciais, comerciais e industriais.",
      gradient: "from-primary-800 to-primary-900"
    },
    {
      icon: <HiOfficeBuilding className="w-10 h-10" />,
      title: "Projetos Arquitetônicos",
      description: "Elaboração de projetos arquitetônicos funcionais e esteticamente planejados para sua obra.",
      gradient: "from-primary-800 to-primary-900"
    },
    {
      icon: <HiClipboardCheck className="w-10 h-10" />,
      title: "Laudos e Perícias",
      description: "Laudos técnicos de avaliação, vistorias e perícias de engenharia com responsabilidade técnica.",
      gradient: "from-primary-800 to-primary-900"
    },
    {
      icon: <HiBriefcase className="w-10 h-10" />,
      title: "Gerenciamento de Obras",
      description: "Acompanhamento e gestão técnica de obras, garantindo prazos, custos e qualidade.",
      gradient: "from-primary-800 to-primary-900"
    },
    {
      icon: <HiHome className="w-10 h-10" />,
      title: "Regularização de Obras",
      description: "Regularização e legalização de edificações junto aos órgãos competentes.",
      gradient: "from-primary-800 to-primary-900"
    },
    {
      icon: <HiPencilAlt className="w-10 h-10" />,
      title: "Consultoria Técnica",
      description: "Consultoria especializada para projetos de construção civil e reformas.",
      gradient: "from-primary-800 to-primary-900"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <span className="text-primary-900 font-semibold text-sm uppercase tracking-wide">
            O que eu faço
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Serviços de Engenharia
          </h2>
          <div className="w-20 h-1 bg-primary-900 mx-auto mt-4"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Soluções completas em engenharia civil para seu projeto, com responsabilidade técnica e qualidade garantida.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group relative overflow-hidden"
            >
              {/* Efeito de brilho ao passar o mouse */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>

              <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-xl relative z-10`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-900 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary-900 hover:bg-primary-800 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Solicite um Orçamento
          </a>
        </div>
      </div>
    </section>
  )
}
