import { Link } from 'react-router-dom';
import Form from './Form';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/services', label: 'Servicios' },
  { to: '/contact', label: 'Contacto' },
];

const serviceLinks = [
  { to: '/services/panels', label: 'Paneles solares' },
  { to: '/services/house', label: 'Vivienda' },
  { to: '/services/cctv', label: 'Videovigilancia' },
  { to: '/services/fibra-optica', label: 'Fibra óptica' },
  { to: '/services/climate', label: 'Climatización de piscinas' },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 overflow-hidden">
    
      <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-48 bg-blue-700/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
     
        <div className="flex flex-col gap-5 max-w-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-cyan-400" />
            <span className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase">¿Listo para empezar?</span>
          </div>
          <h2 className="text-white font-black text-2xl md:text-3xl leading-tight">
            Somos tu aliado para que todo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              funcione perfecto
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed">
            Contactanos hoy para asesorarte en tu siguiente proyecto{' '}
            <span className="text-lime-400 font-black border-b border-lime-400">sin costo!</span>
          </p>
        </div>

        <div className="w-full lg:flex-1">
          <Form />
        </div>
      </div>

      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase mb-1">Navegación</h3>
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} className="text-slate-400 hover:text-cyan-300 text-sm transition-colors duration-200 flex items-center gap-2 group/link">
                <span className="w-0 group-hover/link:w-3 overflow-hidden transition-all duration-200 text-cyan-400 text-xs">→</span>
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase mb-1">Servicios</h3>
            {serviceLinks.map(({ to, label }) => (
              <Link key={to} to={to} className="text-slate-400 hover:text-cyan-300 text-sm transition-colors duration-200 flex items-center gap-2 group/link">
                <span className="w-0 group-hover/link:w-3 overflow-hidden transition-all duration-200 text-cyan-400 text-xs">→</span>
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase mb-1">Contacto</h3>
            <a
              href="mailto:hugojure@saltoinstalaciones.com"
              className="text-slate-400 hover:text-cyan-300 text-sm transition-colors duration-200 flex items-center gap-2 group/link"
            >
              <span className="w-0 group-hover/link:w-3 overflow-hidden transition-all duration-200 text-cyan-400 text-xs">→</span>
              Envianos un mail ↩
            </a>
            <Link to="/contact" className="text-slate-400 hover:text-cyan-300 text-sm transition-colors duration-200 flex items-center gap-2 group/link">
              <span className="w-0 group-hover/link:w-3 overflow-hidden transition-all duration-200 text-cyan-400 text-xs">→</span>
              Página de contacto
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
      
          <a
            href="https://www.google.com/maps/place/Agraciada,+50000+Salto,+Departamento+de+Salto"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-slate-500 hover:text-cyan-300 text-sm font-mono transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M12.02 21.485a1.996 1.996 0 0 1 -1.433 -.585l-4.244 -4.243a8 8 0 1 1 13.403 -3.651" />
              <path d="M16 22l5 -5" /><path d="M21 21.5v-4.5h-4.5" />
            </svg>
            Salto, Uruguay
          </a>

          <div className="flex flex-col sm:flex-row items-center gap-3 text-slate-600 text-xs font-mono">
            <small>Lunes a Viernes · 8:00 – 18:00</small>
            <span className="hidden sm:block w-px h-3 bg-slate-700" />
            <span className="text-slate-500 tracking-widest uppercase">SALTO INSTALACIONES ™</span>
          </div>
        </div>
      </div>
    </footer>
  );
}