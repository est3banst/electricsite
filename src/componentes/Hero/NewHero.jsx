import { useTypingEffect } from '../hooks/useTypingEffect'
import { useInView } from 'react-intersection-observer'
import '../../assets/Newhero.css'
import ButtonContact from '../Contact/ButtonContact'

const NewHero = () => {
    const { ref: titleRef, inView: isTitleVisible } = useInView();
    const { ref: imgRef, inView: isHeroVis } = useInView();
    const { ref: img2Ref, inView: isAllHeroVis } = useInView();


    const titletext = useTypingEffect("SERVICIO TÉCNICO ESPECIALIZADO", 100);
    
  return (
    <>
        <section className='section-mainhero-container'>
            <div className='container-cta-hero'>
            <div className='upper-text1'>
                <h1 ref={titleRef} data-glitch='SALTO' 
                className=
                {`upper-texth1 ${isTitleVisible ? 'reveal-title' : ''}`}
                >
                    SALTO <p> Instalaciones</p>
                </h1>
                <small className='small-salto'>{titletext}</small>
                <section className='section-upperp'>
                    <p className='upper-textp'>
                        Somos una empresa abocada al servicio, mantenimiento y 
                        asesoramiento en el área de la electricidad y la electrónica.
                    </p>
                </section>
            </div>
            <div className='upper-text2'>
                <section className='upper-text2-section'>
                    <ButtonContact />
                </section>
                <section className='upper-text2-section2'>
                    <a 
                    href="https://www.google.com/maps/place/Agraciada,+50000+Salto,+Departamento+de+Salto/@-31.3856407,-57.952567,17z/data=!3m1!4b1!4m6!3m5!1s0x95adc32acbacdc4b:0xf9099c5fd75d9aee!8m2!3d-31.3856407!4d-57.952567!16s%2Fg%2F1vlzck54?entry=ttu">
                        <p>Agraciada 3120</p>
                        
                    <svg 
                        width="24"  height="24"  viewBox="0 0 24 24"  
                        fill="none"  stroke="currentColor"  strokeWidth="2"  
                        strokeLinecap="round"  strokeLinejoin="round"  
                        ><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M12.02 21.485a1.996 1.996 0 0 1 -1.433 
                        -.585l-4.244 -4.243a8 8 0 1 1 13.403 -3.651" />
                        <path d="M16 22l5 -5" /><path d="M21 21.5v-4.5h-4.5" />
                    </svg>
                    </a>
                </section>
                </div>
            </div>
            <div  className='container-images-hero'>
            <div ref={imgRef} className={`aside-img3 ${isHeroVis ? 'reveal-imgs' : ''}`}>
                <section></section>
                </div>
            <div ref={img2Ref} className={`aside-img4 ${isAllHeroVis ? 'reveal-img2' : ''}`}>
                <section>
                </section>
                </div>
            </div>
        </section>

    </>
  )
}

export default NewHero