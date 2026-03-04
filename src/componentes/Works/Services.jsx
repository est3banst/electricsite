import { Link } from 'react-router-dom'
import Works from "./Works"

const serviceItems = [
  {
    to: '/services/panels',
    src: 'imgs/panelpro.png',
    alt: 'Instalación y mantenimiento de paneles solares',
    title: 'Paneles solares',
    descr: 'Nuestro equipo altamente capacitado se encargara de todo el proceso, desde la evaluación de tu espacio hasta la instalación completa, garantizando un rendimiento optimo y duradero',
  },
  {
    to: '/services/fibra-optica',
    src: 'imgs/networks.jpeg',
    alt: 'Diseño e instalación de redes de telecomunicaciones',
    title: 'Asesoría en redes',
    descr: 'Asesoría, planificación e instalaciones de redes de fibra óptica',
  },
  {
    to: '/services/cctv',
    src: 'imgs/camerainst.jpeg',
    alt: 'Instalaciones de sistemas de videovigilancia en el día',
    title: 'Sistemas de Videovigilancia',
    descr: 'Asegurá tu propiedad o negocio con nuestras instalaciones de videovigilancia en el día',
  },
  {
    to: '/services/climate',
    src: 'imgs/poolclima.jpeg',
    alt: 'Sistemas de climatización eficiente para todo tipo de piscinas',
    title: 'Climatización de piscinas',
    descr: 'Para aquellos que desean maximizar el disfrute de su piscina durante todo el año',
  },
  {
    to: '/services/house',
    src: 'imgs/houseinst.jpeg',
    alt: 'Instalaciones, mantenimiento o reparaciones eléctricas en domicilio o comercios',
    title: 'Instalaciones domiciliarias y mantenimiento eléctrico',
    descr: 'Desde instalaciones hasta reparaciones, nos aseguramos de que cada trabajo se realice con la más alta calidad y profesionalismo',
  },
]

export default function Services() {
  return (
    <section className="relative w-full bg-slate-950 py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
   
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
    
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
       
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-[2px] bg-cyan-400" />
          <span className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase">Nuestros servicios</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-10 leading-tight">
          Servicios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {serviceItems.map(({ to, src, alt, title, descr }, i) => (
            <Link
              key={to}
              to={to}
              className={`group relative overflow-hidden rounded-xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] ${
            
                i === serviceItems.length - 1 && serviceItems.length % 2 !== 0
                  ? 'md:col-span-2'
                  : ''
              }`}
            >
              <Works src={src} alt={alt} title={title} descr={descr} />
           
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </Link>
          ))}
        </div>
      </div>

    
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}