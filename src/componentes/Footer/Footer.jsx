import { Link } from 'react-router-dom';
import '../../assets/Footer.css'
import Form from './Form';

export default function Footer () {


    return (
        <>
        <footer>
       <div className='flex flex-col w-full lg:flex-row items-center'>
       <section className='px-6 flex leading-relaxed space-y-1 flex-col gap-5 text-slate-50 py-4 my-4 max-w-full'>
          <h2 className='font-black text-xl md:text-2xl'>Somos tu aliado para que todo funcione perfecto
            </h2>
            <p className='px-4 flex gap-2 max-w-5/6 w-max flex-col font-bold text-base md:text-xl'>Contactanos hoy para asesorarte en tu siguiente proyecto
                <b className='border-b-2 w-max border-[#abfc2d]'>
                sin costo!
                </b>
                </p>
        </section>
        <Form></Form>
       </div>

        <div className='p-4 bg-white/10 font-medium leading-relaxed grid grid-cols-1 md:grid-cols-2 gap-2'>
            <section className='flex flex-col p-4 gap-2'>
                <h2 className='text-slate-50 w-max my-2 text-base md:text-xl border-b-2 border-slate-50'>Navegación</h2>
                <article className='text-slate-50 flex gap-2 flex-col'>
                    <Link to='/'>Inicio</Link>
                    <Link to='/services'>Servicios</Link>
                    <Link to='/contact'>Contacto</Link>
                </article>
            </section>
            <section className='flex flex-col p-4 gap-2'>
                <h2 className='text-slate-50 w-max my-2 text-base md:text-xl border-b-2 border-slate-50'>Servicios</h2>
                <article className='text-slate-50 flex gap-2 flex-col'>
                    <Link to='/services/panels'>Paneles</Link>
                    <Link to='/services/house'>Vivienda</Link>
                    <Link to='/services/cctv'>Videovigilancia</Link>
                    <Link to='/services/fibra-optica'>Fibra óptica</Link>
                    <Link to='/services/climate'>Climatización de piscinas</Link>
                </article>
            </section>
            <section className='flex flex-col p-4 gap-2'>
                <h2 className='text-slate-50 w-max my-2 text-base md:text-xl border-b-2 border-slate-50'>Contacto</h2>
                <article className='text-slate-50 flex gap-2 flex-col'>
                    <a className='underline' href="mailto:hugojure@saltoinstalaciones.com">Envíanos un mail &#8627;</a>
                    <Link to='/contact'>Contacto</Link>
                </article>
            </section>
        </div>

        <div className='container-footer'>
           <a 
           className='flex text-slate-50 w-full justify-center text-base md:text-xl lg:text-2xl items-center' 
           href="https://www.google.com/maps/place/Agraciada,+50000+Salto,+Departamento+de+Salto/@-31.3885067,-57.9379319,17z/data=!4m10!1m2!2m1!1sAgraciada!3m6!1s0x95adc32acbacdc4b:0xf9099c5fd75d9aee!8m2!3d-31.3856407!4d-57.952567!15sCglBZ3JhY2lhZGGSAQVyb3V0ZeABAA!16s%2Fg%2F1vlzck54?entry=ttu">
           Salto, Uruguay 
           <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="currentColor" fill="none" strokeLinecap="round" 
                strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" 
                fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M12.02 21.485a1.996 1.996 0 0 1 -1.433 -.585l-4.244
                -4.243a8 8 0 1 1 13.403 -3.651" />
            <path d="M16 22l5 -5" /><path d="M21 21.5v-4.5h-4.5" />
           </svg>
    
           </a>
        </div>
       
        <div className='text-slate-50 text-xs md:text-base cont-footer p-4 mb-5'>
            <small>Horario de atención: Lunes a Viernes de 8:00 a 18:00</small>
            <h3>SALTO INSTALACIONES &trade;</h3>
        </div>
        </footer>
        </>
    )
}
