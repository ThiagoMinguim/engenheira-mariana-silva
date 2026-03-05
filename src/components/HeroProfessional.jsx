export default function HeroProfessional() {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary-100 rounded-full">
              <span className="text-primary-900 font-semibold text-sm">Engenharia Civil</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Engenheira Diagnóstica
              <span className="block text-primary-900">Mariana Silva</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Soluções em engenharia civil com qualidade, segurança e responsabilidade técnica para seu projeto.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary-900 hover:bg-primary-800 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Entre em Contato
              </a>
              <a
                href="#services"
                className="px-8 py-3 bg-white hover:bg-gray-50 text-primary-900 font-semibold rounded-lg transition-colors border-2 border-primary-900"
              >
                Ver Serviços
              </a>
            </div>
          </div>

          {/* Foto */}
          <div className="relative">
            <div className="relative z-10">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/mariana.jpg"
                  alt="Engenheira Mariana Silva"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Decoração */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-primary-200 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-400 rounded-full -z-10"></div>
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
