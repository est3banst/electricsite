import { useTypingEffect } from "./hooks/useTypingEffect"
import { useInView } from 'react-intersection-observer'
import '../assets/Midhero.css'


export default function HeroComp() {

    const { ref: titleRef, inView: isTitleVisible } = useInView();

    const titletext = useTypingEffect("SERVICIO TÉCNICO ESPECIALIZADO", 100);
    
    return (
        <>
         <div className='hero-main-container'>
         <div className='hero-page-container'>
         
            
            <div className='text-container-hero'>
            <h1 ref={titleRef} data-glitch='SALTO INSTALACIONES' className={`heading-salto ${isTitleVisible ? 'reveal-title' : ''}`}>
            SALTO INSTALACIONES
              </h1>
              <small className='small-salto'>{titletext}</small>
              <section className='hero-mid-section'>
              <a className='call-now-a' href="tel://+59898414718">
                        
                        <p className='contact-now'>Contacte hoy</p>
                            <svg className='phone-now-icon' width="24" height="24" viewBox="0 0 24 24" 
                            strokeWidth="2" 
                            stroke="currentColor" 
                            fill="none" strokeLinecap="round" 
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 
                            -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                            <path d="M15 9l5 -5" /><path d="M15 5l0 4l4 0" />
                            </svg>
                            
                        </a><p>
                        a un profesional de confianza
                        </p>
                        
              </section>
              
            </div>
            <p className='p-wedo'>INSTALACIONES ELÉCTRICAS INTEGRALES</p>
           </div> 
           <div className='container-img-hero'>
           </div>
         </div>
            </>
    )
}

