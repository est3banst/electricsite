import { Link } from 'react-router-dom'

import Works from "./Works"
import '../../assets/Works.css'

export default function Services () {
  
  return (
        <>
   <div className='py-10'>
   <div className='flex items-center'>
    <h2 className="text-2xl md:text-3xl w-max self-start uppercase mx-4 mb-6 pb-2 pt-4 border-b-4 border-[#0393f8]">
    Servicios</h2>
    </div>
    <div className='bg-[#ececec] pt-3 border-2 border-slate-900 gap-4 grid grid-cols-1 md:grid-cols-2'>
            
    
    <Link to='/services/panels'>
    <Works
      src={'imgs/panelpro.png'}
      alt='Instalación y mantenimiento de paneles solares'
      title='Paneles solares'
      descr='Nuestro equipo altamente capacitado se encargara de todo 
      el proceso, desde la evaluación de tu espacio hasta la 
      instalación completa, garantizando un rendimiento optimo y duradero'
    />
    </Link>
    <Link to='/services/fibra-optica'>
    <Works 
      src={'imgs/networks.jpeg'}
      alt='Diseño e instalación de redes de telecomunicaciones'
      title='Asesoría en redes' 
      descr='Asesoría, planificación e instalaciones de redes de fibra óptica'     
    />
    </Link>
    <Link to='/services/cctv'>
    <Works 
      src={'imgs/camerainst.jpeg'}
      alt='Instalaciones de sistemas de videovigilancia en el día'
      title='Sistemas de Videovigilancia'
      descr='Asegurá tu propiedad o negocio con nuestras instalaciones
      de videovigilancia en el día'

    />
    </Link>
    <Link to='/services/climate'>
    <Works 
      src={'imgs/poolclima.jpeg'}
      alt='Sistemas de climatización eficiente para todo tipo de piscinas'
      title='Climatización de piscinas'
      descr='Para aquellos que desean maximizar el disfrute
      de su piscina durante todo el año'
      
    />
    </Link>
    <Link to='/services/house'>
    <Works 
      src={'imgs/houseinst.jpeg'}
      alt='Instalaciones, mantenimiento o reparaciones eléctricas en domicilio o comercios'
      title='Instalaciones domiciliarias y mantenimiento eléctrico'
      descr='Desde instalaciones hasta reparaciones, 
      nos aseguramos de que cada trabajo se realice
       con la más alta calidad y profesionalismo'
    />
    </Link>
    </div>
   </div>
      </>
    )
}