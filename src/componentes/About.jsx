import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const reasons = [
  {
    label: 'Servicios en el día',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M20.942 13.021a9 9 0 1 0 -9.407 7.967" />
        <path d="M12 7v5l3 3" />
        <path d="M15 19l2 2l4 -4" />
      </svg>
    ),
  },
  {
    label: 'Profesionales certificados',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
        <path d="M15 19l2 2l4 -4" />
      </svg>
    ),
  },
  {
    label: 'Transparencia de costos',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
        <path d="M12 7h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
        <path d="M10 13v1m0 -8v1" />
      </svg>
    ),
  },
]

const Nosotros = () => {
  const { ref: cardRef, inView: isCardVisible } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: bannerRef, inView: isBannerVisible } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(imgs/planos.jpeg)` }}
    >
   
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-blue-950/80 to-slate-950/85" />
     
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
    
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-20 flex flex-col gap-8">

        <div className="flex items-center gap-3">
          <div className="w-8 h-[2px] bg-cyan-400" />
          <span className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase">Nosotros</span>
        </div>

      
        <div
          ref={cardRef}
          className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-700 ${
            isCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
     
          <div className="px-6 py-5 border-b border-white/10 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <h2 className="text-lg md:text-xl lg:text-2xl font-black text-white tracking-wide uppercase">
              ¿Por qué elegirnos?
            </h2>
          </div>

          <ul className="divide-y divide-white/5">
            {reasons.map(({ label, icon }, i) => (
              <li
                key={i}
                className={`group flex items-center justify-between px-6 py-5 hover:bg-cyan-400/5 transition-all duration-300 ${
                  isCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                }`}
                style={{ transitionDelay: isCardVisible ? `${i * 100 + 200}ms` : '0ms' }}
              >
                <div className="flex items-center gap-4">
                  <span className="w-1 h-8 rounded-full bg-gradient-to-b from-cyan-400 to-blue-600 flex-shrink-0 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300" />
                  <p className="text-slate-200 font-bold text-base md:text-lg lg:text-xl uppercase tracking-wide group-hover:text-white transition-colors duration-200">
                    {label}
                  </p>
                </div>
                <span className="flex-shrink-0 text-cyan-400/60 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.6)] transition-all duration-300">
                  {icon}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          ref={bannerRef}
          className={`relative backdrop-blur-md bg-blue-950/50 border border-cyan-400/20 rounded-xl px-6 py-8 text-center overflow-hidden transition-all duration-1000 ${
            isBannerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
        
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

          <h2 className="text-slate-100 text-xl md:text-2xl lg:text-3xl font-bold leading-snug mb-6">
            Nuestra experiencia y dedicación es tu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              tranquilidad eléctrica
            </span>
          </h2>

          <Link to="/contact">
            <button className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg font-black text-lg md:text-xl text-white bg-transparent border border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 uppercase tracking-wide">
              Contáctanos hoy
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="m7.053 2.158l7.243 7.256a.66.66 0 0 1 .204.483a.7.7 0 0 1-.204.497q-3.93 3.834-7.575 7.401c-.125.117-.625.408-1.011-.024c-.386-.433-.152-.81 0-.966l7.068-6.908l-6.747-6.759q-.369-.509.06-.939q.43-.43.962-.04" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Nosotros;