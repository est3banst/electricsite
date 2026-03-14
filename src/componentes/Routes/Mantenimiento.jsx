import { Link } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer/Footer';
import Whats from '../Contact/Whats';
import { useScrollTop } from '../hooks/useScrollTop';
import { useInView } from 'react-intersection-observer';
import ButtonContact from '../Contact/ButtonContact';

const plans = [
  {
    id: 'basico',
    label: 'Básico',
    freq: 'Visita semestral',
    color: 'border-slate-600 hover:border-slate-400',
    dot: 'bg-slate-400',
    glow: '',
    features: [
      'Inspección visual de tableros',
      'Verificación de disyuntores',
      'Reporte escrito del estado',
      'Soporte telefónico incluido',
    ],
  },
  {
    id: 'profesional',
    label: 'Profesional',
    freq: 'Visita trimestral',
    color: 'border-cyan-400/60 hover:border-cyan-400',
    dot: 'bg-cyan-400',
    glow: 'shadow-[0_0_30px_rgba(34,211,238,0.12)]',
    badge: 'Más popular',
    features: [
      'Todo lo del plan Básico',
      'Medición de consumo energético',
      'Termografía de tableros',
      'Prioridad en emergencias',
      'Descuento en repuestos 10%',
    ],
  },
  {
    id: 'empresarial',
    label: 'Empresarial',
    freq: 'Visita mensual',
    color: 'border-blue-400/60 hover:border-blue-400',
    dot: 'bg-blue-400',
    glow: 'shadow-[0_0_30px_rgba(96,165,250,0.12)]',
    features: [
      'Todo lo del plan Profesional',
      'Monitoreo remoto 24/7',
      'Guardia de emergencia incluida',
      'Informe técnico mensual',
      'Descuento en repuestos 20%',
      'Certificación anual de instalación',
    ],
  },
];

const benefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3a9 9 0 1 0 9 9" />
        <path d="M17 12v-7h-7" />
      </svg>
    ),
    title: 'Prevención de fallas',
    desc: 'Identificamos problemas antes de que se conviertan en cortes o daños costosos.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M12 7h.01" />
        <path d="M11 12h1v4h1" />
      </svg>
    ),
    title: 'Profesionales certificados',
    desc: 'Cada visita la realiza un técnico habilitado con equipamiento de diagnóstico.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
        <path d="M12 7h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
        <path d="M10 13v1m0 -8v1" />
      </svg>
    ),
    title: 'Costos predecibles',
    desc: 'Cuota fija mensual, sin sorpresas. Sabés exactamente lo que pagás cada mes.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
        <path d="M15 19l2 2l4 -4" />
      </svg>
    ),
    title: 'Documentación garantizada',
    desc: 'Recibís un informe técnico detallado de cada intervención para tus registros.',
  },
];

function FadeIn({ children, delay = 0, className = '' }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Mantenimiento() {
  useScrollTop();

  return (
    <>
      <Nav />
      <main className="relative bg-slate-950 pt-16 overflow-hidden">

        {/* Grid background */}
        <div
          className="fixed inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* ── Hero ── */}
        <section className="relative min-h-[55vh] flex items-end pb-16 px-6 md:px-12 lg:px-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/60 to-slate-950" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-cyan-600/8 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <FadeIn>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px] bg-cyan-400" />
                <span className="font-mono text-cyan-400 text-xs my-5 tracking-[0.3em] uppercase">Nuevos servicios</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
                Plan de{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Mantenimiento
                </span>
                <br />Eléctrico
              </h1>
              <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
                Mantené tu instalación eléctrica en óptimas condiciones con visitas programadas, diagnóstico preventivo y respuesta prioritaria ante emergencias.
              </p>
              <ButtonContact />
            </FadeIn>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
          <FadeIn>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-[2px] bg-cyan-400" />
              <span className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase">¿Por qué suscribirte?</span>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="h-full flex flex-col gap-3 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <span className="text-cyan-400 w-10 h-10 flex items-center justify-center rounded-lg bg-cyan-400/10 flex-shrink-0">
                    {b.icon}
                  </span>
                  <p className="text-white font-bold text-base">{b.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── Plans ── */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 pb-20">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-cyan-400" />
              <span className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase">Planes disponibles</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-10">Elegí el plan ideal</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {plans.map((plan, i) => (
              <FadeIn key={plan.id} delay={i * 100}>
                <div className={`relative h-full flex flex-col p-6 rounded-xl bg-white/5 border-2 ${plan.color} ${plan.glow} transition-all duration-300 backdrop-blur-sm`}>
                  {plan.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-400 text-slate-950 text-xs font-black uppercase tracking-wider whitespace-nowrap">
                      {plan.badge}
                    </span>
                  )}

                  <div className="flex items-center gap-2 mb-1">
                    <span className={`w-2 h-2 rounded-full ${plan.dot}`} />
                    <p className="text-white font-black text-xl">{plan.label}</p>
                  </div>
                  <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-6">{plan.freq}</p>

                  <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <svg className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="group flex items-center justify-center gap-2 py-2.5 rounded-lg border border-current text-sm font-bold uppercase tracking-widest text-cyan-300 hover:bg-cyan-400/10 transition-all duration-200"
                  >
                    Consultar precio
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                    </svg>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Bottom fade to footer */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </main>

      <Whats />
      <Footer />
    </>
  );
}