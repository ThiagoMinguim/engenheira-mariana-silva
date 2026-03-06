export default function HeroProfessional() {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-primary-50 via-white to-primary-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo animados */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight animate-fade-in-up">
              Engenheira
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 animate-gradient">Mariana Silva</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed animate-fade-in-up animation-delay-200">
              Sou Mariana Silva, engenheira civil especializada em engenharia diagnóstica, comprometida em entregar soluções técnicas precisas para vistorias, inspeções prediais e laudos em imóveis residenciais, comerciais e industriais.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up animation-delay-400">
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-primary-900 to-primary-800 hover:from-primary-800 hover:to-primary-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Entre em Contato
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </a>
              <a
                href="#services"
                className="group px-8 py-4 bg-white hover:bg-primary-50 text-primary-900 font-semibold rounded-xl transition-all duration-300 border-2 border-primary-900 hover:border-primary-800 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  Ver Serviços
                  <svg className="w-5 h-5 transform group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Foto */}
          <div className="relative animate-fade-in-right">
            <div className="relative z-10">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/mari1.png"
                  alt="Engenheira Mariana Silva"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Decoração animada */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-primary-200 to-primary-300 rounded-2xl -z-10 animate-pulse-slow"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full -z-10 animate-bounce-slow"></div>
          </div>
        </div>
      </div>

      {/* Onda divisória */}
      <div className="w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
