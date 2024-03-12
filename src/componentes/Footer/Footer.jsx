import '../../assets/Footer.css'
import Form from './Form';

export default function Footer () {


    return (
        <>
        <footer>
      
        <Form></Form>

        <div className='container-footer'>
           <a className='footer-a' href="https://www.google.com/maps/place/Agraciada,+50000+Salto,+Departamento+de+Salto/@-31.3885067,-57.9379319,17z/data=!4m10!1m2!2m1!1sAgraciada!3m6!1s0x95adc32acbacdc4b:0xf9099c5fd75d9aee!8m2!3d-31.3856407!4d-57.952567!15sCglBZ3JhY2lhZGGSAQVyb3V0ZeABAA!16s%2Fg%2F1vlzck54?entry=ttu">
           <small>Salto, Uruguay 
           <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="currentColor" fill="none" strokeLinecap="round" 
                strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" 
                fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M12.02 21.485a1.996 1.996 0 0 1 -1.433 -.585l-4.244
                -4.243a8 8 0 1 1 13.403 -3.651" />
            <path d="M16 22l5 -5" /><path d="M21 21.5v-4.5h-4.5" />
           </svg>
            </small>
           </a>
        </div>
        <div className='second-container-footer'>
            <small>Horario de atención: Lunes a Viernes de 8:00 a 18:00</small>
        <h3>SALTO INSTALACIONES &trade;</h3>
        </div>
        </footer>
        </>
    )
}
