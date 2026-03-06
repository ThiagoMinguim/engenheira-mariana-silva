import { HiCheckCircle, HiShieldCheck, HiUserGroup, HiAcademicCap } from 'react-icons/hi'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Título */}
          <div className="text-center mb-16">
            <span className="text-primary-900 font-semibold text-sm uppercase tracking-wide">
              ✨ Sobre mim
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Engenharia com Excelência
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-900 to-primary-700 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Sou Mariana Silva, engenheira civil especializada em engenharia diagnóstica, comprometida em entregar soluções técnicas precisas para vistorias, inspeções prediais e laudos em imóveis residenciais, comerciais e industriais.
            </p>

            {/* Cards de Valores */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>

                <div className="w-20 h-20 bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg relative z-10">
                  <HiCheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-900 transition-colors">Qualidade</h3>
                <p className="text-gray-600 leading-relaxed">
                  Projetos desenvolvidos com os mais altos padrões técnicos e normativos.
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>

                <div className="w-20 h-20 bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg relative z-10">
                  <HiShieldCheck className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-900 transition-colors">Segurança</h3>
                <p className="text-gray-600 leading-relaxed">
                  Cumprimento rigoroso das normas de segurança e regulamentações vigentes.
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>

                <div className="w-20 h-20 bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg relative z-10">
                  <HiUserGroup className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-900 transition-colors">Compromisso</h3>
                <p className="text-gray-600 leading-relaxed">
                  Atendimento personalizado e acompanhamento em todas as etapas do projeto.
                </p>
              </div>
            </div>

            {/* Formação */}
            <div className="bg-gradient-to-br from-primary-50 via-blue-50 to-white p-8 rounded-2xl mt-12 border-2 border-primary-100 hover:border-primary-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <HiAcademicCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary-900 transition-colors">Formação Acadêmica</h3>
                  <p className="text-gray-700 text-lg mb-2">
                    <strong>Engenharia Civil</strong>
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="px-3 py-1 bg-primary-900 text-white text-xs font-semibold rounded-full">
                      CREA
                    </div>
                    <p className="text-gray-600 text-sm">
                      Registro ativo - Conselho Regional de Engenharia e Agronomia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
