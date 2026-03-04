import { useInView } from 'react-intersection-observer';
import { SwipeCarousel } from './GalleryHero';

const services = [
  { label: "Redes de fibra óptica", icon: "◈" },
  { label: "Instalaciones Eléctricas", icon: "⚡" },
  { label: "Reparaciones Eléctricas", icon: "🔧" },
  { label: "Instalación de Cámaras de Seguridad", icon: "◉" },
  { label: "Control de acceso", icon: "◆" },
  { label: "Instalación de Paneles Solares", icon: "◈" },
  { label: "Iluminaria e Iluminación Led", icon: "✦" },
];

const HeroSecond = () => {
  const { ref: sectionRef, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-slate-950 py-20 px-6 md:px-12 lg:px-20"
    >
    
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
  
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
 
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-cyan-400" />
            <span className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase">Servicios</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
            Soluciones eficientes para tu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              hogar, empresa
            </span>{" "}
            o negocio
          </h2>

          <ul className="flex flex-col gap-2">
            {services.map((service, i) => (
              <li
                key={i}
                className={`group flex items-center gap-4 p-3 rounded-lg border border-transparent hover:border-cyan-400/30 hover:bg-cyan-400/5 cursor-default transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                }`}
                style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-md bg-blue-950 border border-cyan-400/30 flex items-center justify-center text-cyan-400 text-sm group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all duration-300">
                  {service.icon}
                </span>
                <span className="text-slate-300 text-sm md:text-base font-medium group-hover:text-white transition-colors duration-200">
                  {service.label}
                </span>
                <span className="ml-auto w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-cyan-400 text-xs">→</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
            <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.8)]" />
            <span className="w-2 h-2 rounded-full bg-slate-500" />
            <div className="flex-1 h-[1px] bg-gradient-to-r from-slate-700 to-transparent ml-2" />
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(56,189,248,0.08)] bg-slate-900/50 backdrop-blur-sm">
            <SwipeCarousel />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
    </section>
  );
};

export default HeroSecond;