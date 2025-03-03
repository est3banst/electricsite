import '../../assets/Newhero.css'
import { useInView } from 'react-intersection-observer';


const HeroSecond = () => {

    const { ref: imgRef, inView: isHeroVis } = useInView({
        threshold: 0.3,
        triggerOnce: true, 
      });
    
      const { ref: img2Ref, inView: isAllHeroVis } = useInView({
        threshold: 0.4,
        triggerOnce: true,
      });
    
  return (
    <>
     <section className='cust-border h-auto w-full m-auto grid grid-cols-1 gap-4 lg:grid-cols-2 p-6'>
            <div className='h-auto my-3 custom-hero-second'>
                <h2 className='text-slate-100 p-4 md:text-slate-50 font-bold text-xl md:text-2xl lg:text-3xl'>
                    Soluciones eficientes para tu hogar, empresa o negocio
                </h2>
                <section className='p-4 section-for-pfo flex flex-col gap-2'>
                    <p className='text-slate-100 font-semibold underline md:text-slate-50 py-2 text-base md:text-xl lg:text-2xl'>Red fibra óptica
                    </p>
                    <p className='text-slate-100 font-semibold underline md:text-slate-50 py-2 text-base md:text-xl lg:text-2xl'>Instalaciones Eléctricas
                    </p>
                    <p className='text-slate-100 font-semibold underline md:text-slate-50 py-2 text-base md:text-xl lg:text-2xl'>Reparaciones Eléctricas
                    </p>
                    <p className='text-slate-100 font-semibold underline md:text-slate-50 py-2 text-base md:text-xl lg:text-2xl'>Instalación de Cámaras de Seguridad
                    </p>
                    <p className='text-slate-100 font-semibold underline md:text-slate-50 py-2 text-base md:text-xl lg:text-2xl'>Instalación de Redes y Wi-fi
                    </p>
                    <p className='text-slate-100 font-semibold underline md:text-slate-50 py-2 text-base md:text-xl lg:text-2xl'>Porteros Eléctricos
                    </p>
                    <p className='text-slate-100 font-semibold underline md:text-slate-50 py-2 text-base md:text-xl lg:text-2xl'>Instalación de Paneles Solares
                    </p>
                    <p className='text-slate-100 font-semibold underline md:text-slate-50 py-2 text-base md:text-xl lg:text-2xl'>Iluminaria e Iluminación Led
                    </p>
                </section>
            </div>
            <div className='h-auto py-4 flex md:gap-2 flex-col '>
            <div ref={imgRef} 
            style={{
                backgroundImage: 'url(/imgs/panelbox.webp)',
             
            }}
            className={`cust-circle py-4 transition-all duration-1500 ease-in  ${isHeroVis ? 'reveal-imgs' : ''}`}>
               
                </div>
            <div ref={img2Ref} 
            style={{
                backgroundImage: 'url(/imgs/huj.jpg)',
             
            }}
            className={`cust-circle py-4 transition-all duration-1500 ease-in ${isAllHeroVis ? 'reveal-img2' : ''}`}>
              
                </div>
               
            </div>
            
        </section>
        
    </>
  )
}

export default HeroSecond