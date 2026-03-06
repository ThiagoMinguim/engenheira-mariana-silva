import { HiCheckCircle, HiShieldCheck, HiUserGroup, HiAcademicCap, HiTrendingUp, HiSearch, HiLightBulb, HiScale } from 'react-icons/hi'

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
            <div className="w-20 h-1 bg-gradient-to-r from-primary-900 to-primary-700 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              Sou Mariana Silva, Engenheira Civil especializada em Engenharia Diagnóstica. Comprometida em identificar patologias, avaliar o desempenho das edificações e fornecer análises técnicas confiáveis por meio de vistorias, inspeções prediais e laudos em imóveis residenciais, comerciais e industriais.
            </p>

            {/* Cards de Valores */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-50 to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>

                <div className="w-16 h-16 bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg relative z-10">
                  <HiCheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-900 transition-colors">Qualidade</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Diagnósticos e laudos fundamentados, ensaios precisos e total conformidade com as normas técnicas vigentes, garantindo soluções assertivas para a saúde da sua edificação.
                </p>
              </div>

              <div className="text-center p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-50 to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>

                <div className="w-16 h-16 bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg relative z-10">
                  <HiShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-900 transition-colors">Segurança</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Identificação precoce de manifestações patológicas e falhas estruturais, garantindo a integridade física dos usuários e a estabilidade da edificação.
                </p>
              </div>

              <div className="text-center p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-50 to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>

                <div className="w-16 h-16 bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg relative z-10">
                  <HiUserGroup className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-900 transition-colors">Compromisso</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Compromisso em traduzir a complexidade técnica em soluções claras, oferecendo suporte contínuo para que o cliente tome decisões seguras e econômicas sobre seu patrimônio.
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
                    <strong>Engenharia Civil</strong> - UFTM - Universidade Federal do Triângulo Mineiro
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

        {/* Por que investir */}
        <div className="mt-20 bg-gradient-to-br from-primary-50 via-white to-primary-50 rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-xl border border-primary-100">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl mix-blend-multiply opacity-50 -z-0"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl mix-blend-multiply opacity-50 -z-0"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-2 h-10 bg-primary-900 rounded-full shadow-sm"></div>
              <h2 className="text-3xl md:text-3xl font-bold text-gray-800">
                Por que investir?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {/* Card 1 */}
              <div className="space-y-3 group cursor-default p-6 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-white hover:to-primary-50 transition-colors shadow-sm hover:shadow-md border border-gray-50 hover:border-primary-100">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-800 to-primary-900 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                  <HiTrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-900 transition-colors duration-300">Valorização do Imóvel</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Proteção do investimento imobiliário através de diagnósticos precisos que evitam a desvalorização do imóvel e reduzem custos de manutenção corretiva.
                </p>
              </div>
              {/* Card 2 */}
              <div className="space-y-3 group cursor-default p-6 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-white hover:to-primary-50 transition-colors shadow-sm hover:shadow-md border border-gray-50 hover:border-primary-100">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-800 to-primary-900 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                  <HiSearch className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-900 transition-colors duration-300">Detecção e resolução de Anomalias</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Investigação técnica profunda para identificar as causas reais de falhas e danos, fornecendo diretrizes precisas para reparos eficazes que evitam a reincidência.
                </p>
              </div>
              {/* Card 3 */}
              <div className="space-y-3 group cursor-default p-6 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-white hover:to-primary-50 transition-colors shadow-sm hover:shadow-md border border-gray-50 hover:border-primary-100">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-800 to-primary-900 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                  <HiLightBulb className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-900 transition-colors duration-300">Inteligência Patrimonial e Financeira</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Vistorias e inspeções técnicas que permitem um planejamento inteligente da manutenção, substituindo reformas emergenciais caras por intervenções preventivas e econômicas.
                </p>
              </div>
              {/* Card 4 */}
              <div className="space-y-3 group cursor-default p-6 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-white hover:to-primary-50 transition-colors shadow-sm hover:shadow-md border border-gray-50 hover:border-primary-100">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-800 to-primary-900 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                  <HiScale className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-900 transition-colors duration-300">Segurança Jurídica</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Produção de provas técnicas incontestáveis para ações judiciais e extrajudiciais, garantindo segurança jurídica absoluta em casos de vícios construtivos ou responsabilidade civil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
