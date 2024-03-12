import { Link } from 'react-router-dom'

import Works from "./Works"
import '../../assets/Works.css'

import Panels from '/imgs/paneles.jpeg'
import Tecnico from '/imgs/business.jpeg'
import Video from '/imgs/cameras.jpeg'
import Pool from '/imgs/poolclima.jpeg'
import Houselights from '/imgs/ilumina.jpeg'


export default function Services () {
    return (
        <>
    <div className='container-color'>
            
        <h2 className='h2-services'>SERVICIOS</h2>
    <Link to='/paneles'>
    <Works
      src={Panels}
      alt='Instalación y mantenimiento de paneles solares'
      title='Paneles solares'
      descr='Nuestro equipo altamente capacitado se encargara de todo 
      el proceso, desde la evaluación de tu espacio hasta la 
      instalación completa, garantizando un rendimiento optimo y duradero'
    />
    </Link>
    <Link to='/industria'>
    <Works 
      src={Tecnico}
      alt='Instalaciones eléctricas cumpliendo con reglamentación de UTE'
      title='Técnico autorizado por UTE' 
      descr='Asesoría, planificación, y verificación de
      instalaciones para hogar y comercio.'     
    />
    </Link>
    <Link to='/cctv'>
    <Works 
      src={Video}
      alt='Instalaciones de sistemas de videovigilancia en el día'
      title='Sistemas de Videovigilancia'
      descr='Asegurá tu propiedad o negocio con nuestras instalaciones
      de videovigilancia en el día'

    />
    </Link>
    <Link to='/climatizacion'>
    <Works 
      src={Pool}
      alt='Sistemas de climatización eficiente para todo tipo de piscinas'
      title='Climatización de piscinas'
      descr='Para aquellos que desean maximizar el disfrute
      de su piscina durante todo el año'
      
    />
    </Link>
    <Link to='/viviendas'>
    <Works 
      src={Houselights}
      alt='Instalaciones, mantenimiento o reparaciones eléctricas en domicilio o comercios'
      title='Instalaciones domiciliarias y mantenimiento eléctrico'
      descr='Desde instalaciones hasta reparaciones, 
      nos aseguramos de que cada trabajo se realice
       con la más alta calidad y profesionalismo'
    />
    </Link>
    </div>
      </>
    )
}