const contactItems = [
  {
    href: 'mailto:hugojure@saltoinstalaciones.com',
    label: 'Email',
    description: 'Solicitá un presupuesto o coordiná una visita',
    sub: 'Envianos un mail',
    color: 'from-cyan-500 to-blue-600',
    glow: 'rgba(34,211,238,0.3)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
        <path d="M3 6l9 6l9 -6" />
        <path d="M15 18h6" />
        <path d="M18 15l3 3l-3 3" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/saltoinstalaciones/',
    label: 'Instagram',
    description: 'Chequeá nuestros trabajos y proyectos',
    sub: '@saltoinstalaciones',
    color: 'from-pink-500 to-purple-600',
    glow: 'rgba(236,72,153,0.25)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M16.5 7.5l0 .01" />
      </svg>
    ),
  },
  {
    href: 'https://www.facebook.com/salto.salto.9678?mibextid=ZbWKwL',
    label: 'Facebook',
    description: 'Encontrá más información y reseñas',
    sub: 'Salto Instalaciones',
    color: 'from-blue-500 to-blue-700',
    glow: 'rgba(59,130,246,0.3)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
      </svg>
    ),
  },
]

export default function Contacto() {
  return (
    <section className="relative w-full bg-slate-950 py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
 
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
  
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-blue-600/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto">
    
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-cyan-400" />
          <span className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase">Contacto</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-12 leading-tight">
          Hablemos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {contactItems.map(({ href, label, description, sub, color, glow, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="group relative flex flex-col items-center text-center gap-4 p-8 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-sm overflow-hidden transition-all duration-300"
              style={{ '--glow': glow }}
            >
            
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${glow} 0%, transparent 70%)` }}
              />

              <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 animate-pulse`}>
                {icon}
              </div>

              <div className="relative z-10 flex flex-col gap-1">
                <p className="text-white font-bold text-base md:text-lg">{description}</p>
                <p className="text-slate-400 text-sm font-mono group-hover:text-cyan-300 transition-colors duration-200">{sub}</p>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}