import { useTypingEffect } from '../hooks/useTypingEffect'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import '../../assets/Newhero.css'
import ButtonContact from '../Contact/ButtonContact'


const imgs = [
    {
        imgSrc: '/imgs/huge-hero.jpeg',
    },
    {
      imgSrc : '/imgs/hugo-tr.jpeg',
    },
    {
      imgSrc : '/imgs/hugo-fr-o.jpeg'
    },
    {
        imgSrc: '/imgs/w-img.jpeg',
    },
    {
        imgSrc: '/imgs/huge-hero2.jpg'
    }
]

const NewHero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [prevImageIndex, setPrevImageIndex] = useState(1);
    const { ref: titleRef, inView: isTitleVisible } = useInView();

    const titletext = useTypingEffect("SERVICIO TÉCNICO ESPECIALIZADO", 100);
    
    useEffect(() => {
        const interval = setInterval(() => {
          setPrevImageIndex(currentImageIndex);
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgs.length);
        }, 2000); 
        return () => clearInterval(interval);
      }, [currentImageIndex]);
    

  return (
    <>
        <section className='h-[100vh] relative'>
        {prevImageIndex !== null && (
          <div
            style={{
              backgroundImage: `url(${imgs[prevImageIndex].imgSrc})`,
              backgroundPosition: '50% 50%',
              backgroundRepeat: 'no-repeat',
            }}
            className="absolute inset-0 w-full h-full bg-cover opacity-100 transition-opacity duration-1000"
          ></div>
        )}

        <div
          style={{
            backgroundImage: `url(${imgs[currentImageIndex].imgSrc})`,
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
          }}
          className="absolute inset-0 w-full h-full bg-cover opacity-0 transition-opacity duration-1000"
        ></div>
            <div className='h-[100vh] w-[100vw] justify-center flex'>
            <div className='custom-hero flex flex-col gap-2 p-4 justify-center w-max mr-4 my-auto'>
            <h1 ref={titleRef}
                className=
                {`text-xl py-1 md:text-3xl md:py-3 text-slate-100 font-extrabold lg:text-4xl custom-h1 ${isTitleVisible ? 'reveal-title' : ''}`}
                >
                    SALTO Instalaciones
                </h1>
                <small className='my-2 text-slate-100 text-xs md:text-base lg:text-xl font-semibold'>{titletext}</small>
                <section className='flex flex-col gap-3 my-2'>
                    <p className='text-slate-100 text-sm md:text-base lg:text-xl'>
                        Especializados en mantenimiento y 
                        asesoramiento en el área de la electricidad y la electrónica.
                    </p>
                    <p className='text-slate-100 text-sm md:text-base lg:text-xl'>Planos, puesta en marcha y ejecucción de proyectos en infraestructura eléctrica</p>
                    <ButtonContact />
                </section>
                
                <a 
                className='flex items-center p-2 text-slate-100'
                href="https://www.google.com/maps/place/Agraciada,+50000+Salto,+Departamento+de+Salto/@-31.3856407,-57.952567,17z/data=!3m1!4b1!4m6!3m5!1s0x95adc32acbacdc4b:0xf9099c5fd75d9aee!8m2!3d-31.3856407!4d-57.952567!16s%2Fg%2F1vlzck54?entry=ttu">
                <p className=''>Salto, Uruguay</p>
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
           
        </section>

    </>
  )
}

export default NewHero