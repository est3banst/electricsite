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
            <div 
            style={{
                backgroundImage: 'url(/imgs/huge-hero.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: '80% 50%',
                backgroundRepeat: 'no-repeat'
            }}
            className='flex justify-end h-[100vh]'>
            <div className='custom-hero w-[50%] md:w-[40%] lg:w-[30%] my-auto'>
            <h1 ref={titleRef}
                className=
                {`text-3xl py-4 md:text-4xl text-slate-100 font-extrabold lg:text-6xl custom-h1 ${isTitleVisible ? 'reveal-title' : ''}`}
                >
                    SALTO Instalaciones
                </h1>
                <small className='my-4 text-slate-100 italic text-xs md:text-sm lg:text-base font-semibold'>{titletext}</small>
                <section className='my-5'>
                    <p className='text-slate-100 text-xl md:text-2l lg:text-3xl'>
                        Somos una empresa abocada al servicio, mantenimiento y 
                        asesoramiento en el área de la electricidad y la electrónica.
                    </p>
                </section>
                <ButtonContact />
                <a 
                className='flex items-center justify-center text-slate-100'
                href="https://www.google.com/maps/place/Agraciada,+50000+Salto,+Departamento+de+Salto/@-31.3856407,-57.952567,17z/data=!3m1!4b1!4m6!3m5!1s0x95adc32acbacdc4b:0xf9099c5fd75d9aee!8m2!3d-31.3856407!4d-57.952567!16s%2Fg%2F1vlzck54?entry=ttu">
                <p className=''>Agraciada 3120</p>
                <svg width="24"  height="24"  viewBox="0 0 24 24"  
                    fill="none"  stroke="currentColor"  strokeWidth="2"  
                    strokeLinecap="round"  strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M12.02 21.485a1.996 1.996 0 0 1 -1.433-.585l-4.244 -4.243a8 8 0 1 1 13.403 -3.651" />
                        <path d="M16 22l5 -5"/><path d="M21 21.5v-4.5h-4.5" />
                    </svg>
                </a>
               
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