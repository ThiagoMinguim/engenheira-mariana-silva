export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Título */}
          <div className="text-center mb-16">
            <span className="text-primary-900 font-semibold text-sm uppercase tracking-wide">
              Sobre mim
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Engenharia com Excelência
            </h2>
            <div className="w-20 h-1 bg-primary-900 mx-auto mt-4"></div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Sou Mariana Silva, engenheira civil comprometida em entregar soluções técnicas de qualidade para projetos residenciais, comerciais e industriais.
            </p>

            {/* Cards de Valores */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-primary-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Qualidade</h3>
                <p className="text-gray-600">
                  Projetos desenvolvidos com os mais altos padrões técnicos e normativos.
                </p>
              </div>

              <div className="text-center p-6 bg-primary-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Segurança</h3>
                <p className="text-gray-600">
                  Cumprimento rigoroso das normas de segurança e regulamentações vigentes.
                </p>
              </div>

              <div className="text-center p-6 bg-primary-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Compromisso</h3>
                <p className="text-gray-600">
                  Atendimento personalizado e acompanhamento em todas as etapas do projeto.
                </p>
              </div>
            </div>

            {/* Formação */}
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl mt-12 border border-primary-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Formação Acadêmica</h3>
                  <p className="text-gray-700">
                    <strong>Engenharia Civil</strong>
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Registro ativo no CREA - Conselho Regional de Engenharia e Agronomia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
