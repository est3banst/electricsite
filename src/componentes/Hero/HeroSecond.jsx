import '../../assets/Newhero.css'
import { useInView } from 'react-intersection-observer';
import { SwipeCarousel } from './GalleryHero';


const HeroSecond = () => {

    const { ref: imgRef, inView: isHeroVis } = useInView({
        threshold: 0.1,
        triggerOnce: true, 
      });
    
  return (
    <>
     <section ref={imgRef} className='background-custom py-24 h-auto w-full m-auto grid grid-cols-1 gap-6 overflow-hidden lg:grid-cols-2 p-6'>
            <div  className='h-auto my-3 custom-hero-second'>
                <h2 className='text-slate-100 p-4 md:text-slate-50 font-bold text-xl md:text-2xl lg:text-3xl'>
                    Soluciones eficientes para tu hogar, empresa o negocio
                </h2>
                <section className='p-4 section-for-pfo flex flex-col gap-2'>
                    <p className='text-slate-100 font-semibold underline md:text-slate-50 py-2 text-base md:text-xl lg:text-2xl'>Redes de fibra óptica
                    </p>
                    <p className='text-slate-100 font-semibold underline md:text-slate-50 py-2 text-base md:text-xl lg:text-2xl'>Instalaciones Eléctricas
                    </p>
                    <p className='text-slate-100 font-semibold underline md:text-slate-50 py-2 text-base md:text-xl lg:text-2xl'>Reparaciones Eléctricas
                    </p>
                    <p className='text-slate-100 font-semibold underline md:text-slate-50 py-2 text-base md:text-xl lg:text-2xl'>Instalación de Cámaras de Seguridad
                    </p>
                    <p className='text-slate-100 font-semibold underline md:text-slate-50 py-2 text-base md:text-xl lg:text-2xl'>Control de acceso
                    </p>
                    <p className='text-slate-100 font-semibold underline md:text-slate-50 py-2 text-base md:text-xl lg:text-2xl'>Instalación de Paneles Solares
                    </p>
                    <p className='text-slate-100 font-semibold underline md:text-slate-50 py-2 text-base md:text-xl lg:text-2xl'>Iluminaria e Iluminación Led
                    </p>
                </section>
            </div>
            <div className='h-full p-4 w-full gap-4 flex md:gap-4 flex-col '>
            <SwipeCarousel/>
               
            </div>
            
        </section>
        
    </>
  )
}

export default HeroSecond