import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer/Footer';
import Whats from '../Contact/Whats';
import { useScrollTop } from '../hooks/useScrollTop';
import { useInView } from 'react-intersection-observer';
import ButtonContact from '../Contact/ButtonContact';

const steps = [
  {
    n: '01',
    title: 'Evaluación del sitio',
    desc: 'Inspeccionamos tu tablero eléctrico, la capacidad disponible y el lugar de instalación del cargador.',
  },
  {
    n: '02',
    title: 'Propuesta técnica',
    desc: 'Elaboramos un presupuesto detallado con el cargador recomendado según tu vehículo y uso.',
  },
  {
    n: '03',
    title: 'Instalación certificada',
    desc: 'Nuestros técnicos realizan el cableado, protecciones y montaje del cargador en el día.',
  },
  {
    n: '04',
    title: 'Puesta en marcha',
    desc: 'Verificamos el funcionamiento, te explicamos el uso y entregamos la documentación técnica.',
  },
];

const chargerTypes = [
  {
    level: 'Nivel 1 — AC Domiciliario',
    power: '1.4 – 3.7 kW',
    time: '8 – 20 hs carga completa',
    desc: 'Ideal para uso nocturno en viviendas. Usa un tomacorriente reforzado de 220V.',
    color: 'text-slate-300',
    borderColor: 'border-slate-600',
    dotColor: 'bg-slate-400',
  },
  {
    level: 'Nivel 2 — AC Semi-rápido',
    power: '7 – 22 kW',
    time: '3 – 8 hs carga completa',
    desc: 'El más recomendado para hogares y empresas. Wallbox dedicada con protecciones propias.',
    color: 'text-cyan-300',
    borderColor: 'border-cyan-400/60',
    dotColor: 'bg-cyan-400',
    badge: 'Más solicitado',
  },
  {
    level: 'Nivel 3 — DC Rápido',
    power: '50 – 150 kW',
    time: '20 – 60 min carga completa',
    desc: 'Para flotas empresariales o estaciones de carga públicas. Requiere acometida trifásica.',
    color: 'text-blue-300',
    borderColor: 'border-blue-400/60',
    dotColor: 'bg-blue-400',
  },
];

const faqs = [
  {
    q: '¿Cualquier vehículo eléctrico es compatible?',
    a: 'Sí. Trabajamos con todos los estándares: Type 2, CCS2, CHAdeMO y Schuko. Antes de instalar verificamos el conector de tu vehículo.',
  },
  {
    q: '¿Necesito reforzar mi tablero eléctrico?',
    a: 'Depende de la potencia instalada. Lo evaluamos en la visita técnica sin costo. En muchos casos la instalación existente es suficiente.',
  },
  {
    q: '¿La instalación queda certificada?',
    a: 'Sí. Entregamos documentación técnica completa y la instalación cumple con la normativa eléctrica vigente en Uruguay.',
  },
  {
    q: '¿Cuánto tiempo demora la instalación?',
    a: 'La mayoría de las instalaciones residenciales se completan en un mismo día, entre 3 y 6 horas según la complejidad.',
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

function FAQ({ q, a }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left group"
      >
        <span className="text-slate-200 font-semibold text-sm md:text-base group-hover:text-white transition-colors duration-200">{q}</span>
        <span className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full border border-white/20 text-slate-400 transition-all duration-300 ${expanded ? 'rotate-45 border-cyan-400 text-cyan-400' : ''}`}>
          +
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-40 pb-4' : 'max-h-0'}`}>
        <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function CargadoresEV() {
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
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          <div className="absolute -top-40 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <FadeIn>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px] bg-blue-400" />
                <span className="font-mono text-blue-400 text-xs my-5 tracking-[0.3em] uppercase">Nuevos servicios</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
                Cargadores{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  EV
                </span>
                <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(96,165,250,0.7)' }}>
                  Instalación
                </span>
              </h1>
              <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
                Instalamos cargadores para vehículos eléctricos en hogares, empresas y estacionamientos. Soluciones certificadas para todos los modelos y estándares.
              </p>
              <ButtonContact />
            </FadeIn>
          </div>
        </section>

        {/* ── Charger types ── */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-blue-400" />
              <span className="font-mono text-blue-400 text-xs tracking-[0.3em] uppercase">Tipos de cargador</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-10">¿Qué cargador necesitás?</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {chargerTypes.map((c, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className={`relative h-full flex flex-col gap-4 p-6 rounded-xl bg-white/5 border-2 ${c.borderColor} backdrop-blur-sm transition-all duration-300 hover:bg-white/8`}>
                  {c.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-400 text-slate-950 text-xs font-black uppercase tracking-wider whitespace-nowrap">
                      {c.badge}
                    </span>
                  )}
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${c.dotColor}`} />
                    <p className={`font-black text-sm uppercase tracking-wide ${c.color}`}>{c.level}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-bold text-2xl">{c.power}</p>
                    <p className="font-mono text-xs text-slate-500">{c.time}</p>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── Process ── */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-blue-400" />
              <span className="font-mono text-blue-400 text-xs tracking-[0.3em] uppercase">Cómo trabajamos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-10">El proceso de instalación</h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="relative h-full flex flex-col gap-3 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                  {/* Connector line on desktop */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-2 w-4 h-px bg-gradient-to-r from-blue-400/40 to-transparent z-10" />
                  )}
                  <span className="font-mono text-3xl font-black text-blue-400/20">{s.n}</span>
                  <p className="text-white font-bold text-base">{s.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 py-16">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-blue-400" />
              <span className="font-mono text-blue-400 text-xs tracking-[0.3em] uppercase">Preguntas frecuentes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">FAQ</h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="rounded-xl bg-white/5 border border-white/10 px-6 divide-y divide-white/0">
              {faqs.map((f, i) => (
                <FAQ key={i} q={f.q} a={f.a} />
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ── CTA banner ── */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-20">
          <FadeIn>
            <div className="relative rounded-xl overflow-hidden border border-blue-400/20 bg-blue-950/30 backdrop-blur-sm p-8 md:p-12 text-center">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                ¿Listo para cargar tu auto en casa?
              </h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                Solicitá una visita técnica sin costo y te asesoramos en la mejor solución para tu vehículo y hogar.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <ButtonContact />
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-blue-400/40 text-blue-300 hover:border-blue-400 hover:bg-blue-400/10 text-sm font-bold uppercase tracking-widest transition-all duration-300"
                >
                  Enviar consulta
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </main>

      <Whats />
      <Footer />
    </>
  );
}