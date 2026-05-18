import { useState } from "react";
import {
  TrendingUp,
  Search,
  Lightbulb,
  Scale,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "Valorização do Imóvel",
    description:
      "Proteção do investimento imobiliário por meio de diagnósticos precisos que previnem a desvalorização e reduzem custos de manutenção corretiva.",
    icon: TrendingUp,
  },
  {
    number: "02",
    title: "Detecção e resolução de Anomalias",
    description:
      "Investigação técnica aprofundada para identificar as causas reais de falhas e danos, oferecendo diretrizes precisas para reparos eficazes que evitam a reincidência.",
    icon: Search,
  },
  {
    number: "03",
    title: "Inteligência Patrimonial e Financeira",
    description:
      "Vistorias e inspeções técnicas que permitem um planejamento inteligente da manutenção, substituindo reformas emergenciais caras por intervenções preventivas e econômicas.",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Segurança Jurídica",
    description:
      "Produção de provas técnicas incontestáveis para ações judiciais e extrajudiciais, garantindo segurança jurídica em casos de vícios construtivos ou responsabilidade civil.",
    icon: Scale,
  },
];

export default function WhyInvestSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="investir" className="relative overflow-hidden bg-[#FAFBF8] dark:bg-[#16191d] px-6 py-24 text-[#2E3238] dark:text-[#e8eaed]">
      {/* Background decorativo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 bottom-0 h-[520px] w-[520px] rounded-full border border-[#A8CBB0]/20 dark:border-[#2F6F4E]/15" />
        <div className="absolute -left-10 bottom-16 h-[360px] w-[360px] rounded-full border border-[#A8CBB0]/20 dark:border-[#2F6F4E]/15" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full border border-[#A8CBB0]/20 dark:border-[#2F6F4E]/15" />

        {/* Architectural perspective sketch */}
        <svg
          className="absolute left-0 bottom-0 h-[400px] w-[440px] opacity-[0.10] dark:opacity-[0.06]"
          viewBox="0 0 440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="380" x2="440" y2="380" stroke="#2F6F4E" strokeWidth="0.5" />
          <line x1="220" y1="100" x2="60" y2="380" stroke="#2F6F4E" strokeWidth="0.3" strokeDasharray="6 4" />
          <line x1="220" y1="100" x2="380" y2="380" stroke="#2F6F4E" strokeWidth="0.3" strokeDasharray="6 4" />
          <polygon points="100,380 100,140 180,120 180,380" stroke="#2F6F4E" strokeWidth="1.2" fill="none" />
          <polygon points="180,120 240,145 240,380 180,380" stroke="#2F6F4E" strokeWidth="1.2" fill="none" />
          <line x1="95" y1="140" x2="185" y2="118" stroke="#2F6F4E" strokeWidth="0.8" />
          <line x1="185" y1="118" x2="245" y2="143" stroke="#2F6F4E" strokeWidth="0.8" />
          <rect x="110" y="165" width="14" height="20" rx="1" stroke="#2F6F4E" strokeWidth="0.7" fill="none" />
          <rect x="110" y="200" width="14" height="20" rx="1" stroke="#2F6F4E" strokeWidth="0.7" fill="none" />
          <rect x="110" y="235" width="14" height="20" rx="1" stroke="#2F6F4E" strokeWidth="0.7" fill="none" />
          <rect x="110" y="270" width="14" height="20" rx="1" stroke="#2F6F4E" strokeWidth="0.7" fill="none" />
          <rect x="110" y="305" width="14" height="20" rx="1" stroke="#2F6F4E" strokeWidth="0.7" fill="none" />
          <rect x="110" y="340" width="14" height="20" rx="1" stroke="#2F6F4E" strokeWidth="0.7" fill="none" />
          <rect x="133" y="160" width="14" height="20" rx="1" stroke="#2F6F4E" strokeWidth="0.7" fill="none" />
          <rect x="133" y="195" width="14" height="20" rx="1" stroke="#2F6F4E" strokeWidth="0.7" fill="none" />
          <rect x="133" y="230" width="14" height="20" rx="1" stroke="#2F6F4E" strokeWidth="0.7" fill="none" />
          <rect x="133" y="265" width="14" height="20" rx="1" stroke="#2F6F4E" strokeWidth="0.7" fill="none" />
          <rect x="133" y="300" width="14" height="20" rx="1" stroke="#2F6F4E" strokeWidth="0.7" fill="none" />
          <rect x="133" y="335" width="14" height="20" rx="1" stroke="#2F6F4E" strokeWidth="0.7" fill="none" />
          <rect x="156" y="155" width="14" height="20" rx="1" stroke="#2F6F4E" strokeWidth="0.7" fill="none" />
          <rect x="156" y="190" width="14" height="20" rx="1" stroke="#2F6F4E" strokeWidth="0.7" fill="none" />
          <rect x="156" y="225" width="14" height="20" rx="1" stroke="#2F6F4E" strokeWidth="0.7" fill="none" />
          <rect x="156" y="260" width="14" height="20" rx="1" stroke="#2F6F4E" strokeWidth="0.7" fill="none" />
          <rect x="156" y="295" width="14" height="20" rx="1" stroke="#2F6F4E" strokeWidth="0.7" fill="none" />
          <rect x="156" y="330" width="14" height="20" rx="1" stroke="#2F6F4E" strokeWidth="0.7" fill="none" />
          <path d="M192 170L215 178V196L192 188Z" stroke="#2F6F4E" strokeWidth="0.6" fill="none" />
          <path d="M192 205L215 213V231L192 223Z" stroke="#2F6F4E" strokeWidth="0.6" fill="none" />
          <path d="M192 240L215 248V266L192 258Z" stroke="#2F6F4E" strokeWidth="0.6" fill="none" />
          <path d="M192 275L215 283V301L192 293Z" stroke="#2F6F4E" strokeWidth="0.6" fill="none" />
          <path d="M192 310L215 318V336L192 328Z" stroke="#2F6F4E" strokeWidth="0.6" fill="none" />
          <polygon points="260,380 260,210 320,195 320,380" stroke="#2F6F4E" strokeWidth="0.9" fill="none" />
          <polygon points="320,195 360,215 360,380 320,380" stroke="#2F6F4E" strokeWidth="0.9" fill="none" />
          <rect x="270" y="225" width="12" height="16" rx="1" stroke="#2F6F4E" strokeWidth="0.5" fill="none" />
          <rect x="290" y="222" width="12" height="16" rx="1" stroke="#2F6F4E" strokeWidth="0.5" fill="none" />
          <rect x="270" y="255" width="12" height="16" rx="1" stroke="#2F6F4E" strokeWidth="0.5" fill="none" />
          <rect x="290" y="252" width="12" height="16" rx="1" stroke="#2F6F4E" strokeWidth="0.5" fill="none" />
          <rect x="270" y="285" width="12" height="16" rx="1" stroke="#2F6F4E" strokeWidth="0.5" fill="none" />
          <rect x="290" y="282" width="12" height="16" rx="1" stroke="#2F6F4E" strokeWidth="0.5" fill="none" />
          <rect x="270" y="315" width="12" height="16" rx="1" stroke="#2F6F4E" strokeWidth="0.5" fill="none" />
          <rect x="290" y="312" width="12" height="16" rx="1" stroke="#2F6F4E" strokeWidth="0.5" fill="none" />
          <rect x="270" y="345" width="12" height="16" rx="1" stroke="#2F6F4E" strokeWidth="0.5" fill="none" />
          <rect x="290" y="342" width="12" height="16" rx="1" stroke="#2F6F4E" strokeWidth="0.5" fill="none" />
          <line x1="85" y1="140" x2="85" y2="380" stroke="#2F6F4E" strokeWidth="0.4" strokeDasharray="4 3" />
          <line x1="85" y1="140" x2="90" y2="140" stroke="#2F6F4E" strokeWidth="0.5" />
          <line x1="85" y1="380" x2="90" y2="380" stroke="#2F6F4E" strokeWidth="0.5" />
          <line x1="50" y1="385" x2="90" y2="385" stroke="#2F6F4E" strokeWidth="0.4" />
          <line x1="60" y1="390" x2="110" y2="390" stroke="#2F6F4E" strokeWidth="0.3" />
          <line x1="240" y1="385" x2="370" y2="385" stroke="#2F6F4E" strokeWidth="0.4" />
          <line x1="250" y1="390" x2="350" y2="390" stroke="#2F6F4E" strokeWidth="0.3" />
          <rect x="135" y="345" width="22" height="35" rx="2" stroke="#2F6F4E" strokeWidth="0.8" fill="none" />
          <line x1="146" y1="345" x2="146" y2="380" stroke="#2F6F4E" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.5fr]">
        {/* Texto lateral */}
        <div className="flex flex-col justify-center">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-7 w-1 rounded-full bg-[#2F6F4E]" />
            <span className="text-sm font-semibold uppercase tracking-[0.32em] text-[#2F6F4E] dark:text-[#4daa78]">
              Investimento inteligente
            </span>
          </div>

          <h2 className="max-w-md font-serif text-5xl leading-tight text-[#252A31] dark:text-white md:text-6xl">
            Por que{" "}
            <span className="italic text-[#2F6F4E] dark:text-[#4daa78]">investir?</span>
          </h2>

          <div className="mt-7 h-[3px] w-20 rounded-full bg-dourado" />

          <p className="mt-10 max-w-md text-xl leading-relaxed text-[#6D7378] dark:text-white/50">
            Diagnóstico técnico é estratégia. Mais do que identificar problemas,
            é garantir valor, segurança e tranquilidade para o seu patrimônio.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {benefits.map((item) => {
            const Icon = item.icon;
            const isActive = hovered === item.number;

            return (
              <article
                key={item.number}
                onMouseEnter={() => setHovered(item.number)}
                onMouseLeave={() => setHovered(null)}
                className={[
                  "group relative min-h-[260px] overflow-hidden rounded-2xl border p-8 transition-all duration-500 cursor-pointer",
                  isActive
                    ? "border-[#2F6F4E]/20 bg-[#2F6F4E] text-white shadow-2xl shadow-[#2F6F4E]/20 -translate-y-1"
                    : "border-[#DDE5DE] dark:border-white/8 bg-white/75 dark:bg-[#22262b]/75 shadow-sm",
                ].join(" ")}
              >
                <div className={`absolute inset-0 bg-[linear-gradient(120deg,rgba(47,111,78,0.95),rgba(18,62,42,0.88))] transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                <div className={`absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_35%)] transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

                <svg
                  className={`absolute right-0 bottom-0 h-[70%] w-[45%] transition-opacity duration-700 ${isActive ? 'opacity-[0.08]' : 'opacity-0'}`}
                  viewBox="0 0 200 260"
                  fill="none"
                  preserveAspectRatio="xMaxYMax meet"
                >
                  <rect x="70" y="20" width="40" height="240" fill="white" rx="1" />
                  <rect x="75" y="10" width="30" height="14" fill="white" rx="1" />
                  <line x1="90" y1="0" x2="90" y2="10" stroke="white" strokeWidth="2" />
                  <rect x="78" y="35" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.5)" />
                  <rect x="88" y="35" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.5)" />
                  <rect x="98" y="35" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.5)" />
                  <rect x="78" y="55" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.5)" />
                  <rect x="88" y="55" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.5)" />
                  <rect x="98" y="55" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.5)" />
                  <rect x="78" y="75" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.5)" />
                  <rect x="88" y="75" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.5)" />
                  <rect x="98" y="75" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.5)" />
                  <rect x="78" y="95" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.5)" />
                  <rect x="88" y="95" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.5)" />
                  <rect x="98" y="95" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.5)" />
                  <rect x="78" y="115" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.5)" />
                  <rect x="88" y="115" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.5)" />
                  <rect x="98" y="115" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.5)" />
                  <rect x="30" y="100" width="35" height="160" fill="white" rx="1" />
                  <rect x="37" y="115" width="5" height="7" rx="0.5" fill="rgba(47,111,78,0.4)" />
                  <rect x="47" y="115" width="5" height="7" rx="0.5" fill="rgba(47,111,78,0.4)" />
                  <rect x="37" y="132" width="5" height="7" rx="0.5" fill="rgba(47,111,78,0.4)" />
                  <rect x="47" y="132" width="5" height="7" rx="0.5" fill="rgba(47,111,78,0.4)" />
                  <rect x="37" y="149" width="5" height="7" rx="0.5" fill="rgba(47,111,78,0.4)" />
                  <rect x="47" y="149" width="5" height="7" rx="0.5" fill="rgba(47,111,78,0.4)" />
                  <rect x="37" y="166" width="5" height="7" rx="0.5" fill="rgba(47,111,78,0.4)" />
                  <rect x="47" y="166" width="5" height="7" rx="0.5" fill="rgba(47,111,78,0.4)" />
                  <rect x="115" y="140" width="45" height="120" fill="white" rx="1" />
                  <rect x="122" y="155" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.4)" />
                  <rect x="135" y="155" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.4)" />
                  <rect x="148" y="155" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.4)" />
                  <rect x="122" y="175" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.4)" />
                  <rect x="135" y="175" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.4)" />
                  <rect x="148" y="175" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.4)" />
                  <rect x="122" y="195" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.4)" />
                  <rect x="135" y="195" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.4)" />
                  <rect x="148" y="195" width="6" height="8" rx="0.5" fill="rgba(47,111,78,0.4)" />
                  <rect x="165" y="180" width="30" height="80" fill="white" rx="1" />
                </svg>

                <div className="relative z-10">
                  <div className="mb-10 flex items-start justify-between">
                    <div
                      className={[
                        "flex h-16 w-16 items-center justify-center rounded-full transition-all duration-500",
                        isActive
                          ? "bg-white/95 text-[#2F6F4E]"
                          : "bg-[#EAF1EC] dark:bg-verde/15 text-[#2F6F4E] dark:text-[#4daa78]",
                      ].join(" ")}
                    >
                      <Icon size={28} strokeWidth={2} />
                    </div>

                    <span
                      className={[
                        "text-4xl font-semibold transition-colors duration-500",
                        isActive
                          ? "text-white/20"
                          : "text-[#A8CBB0]/70 dark:text-[#2F6F4E]/50",
                      ].join(" ")}
                    >
                      {item.number}
                    </span>
                  </div>

                  <h3
                    className={[
                      "font-serif text-2xl leading-tight transition-colors duration-500",
                      isActive ? "text-white" : "text-[#252A31] dark:text-white",
                    ].join(" ")}
                  >
                    {item.title}
                  </h3>

                  <div
                    className={[
                      "mt-5 h-[2px] w-14 rounded-full transition-colors duration-500",
                      isActive ? "bg-white/70" : "bg-[#A8CBB0] dark:bg-verde/40",
                    ].join(" ")}
                  />

                  <p
                    className={[
                      "mt-5 text-base leading-relaxed transition-colors duration-500",
                      isActive ? "text-white/90" : "text-[#697077] dark:text-white/45",
                    ].join(" ")}
                  >
                    {item.description}
                  </p>
                </div>

                <div className={`absolute bottom-6 right-6 grid grid-cols-4 gap-1 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-30 dark:opacity-15'}`}>
                  {Array.from({ length: 16 }).map((_, index) => (
                    <span
                      key={index}
                      className="h-1 w-1 rounded-full bg-[#A8CBB0]"
                    />
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
