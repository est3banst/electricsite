import '../../assets/Newhero.css'
import { useInView } from 'react-intersection-observer';


const HeroSecond = () => {

    const { ref: imgRef, inView: isHeroVis } = useInView({
        threshold: 0.5,
        triggerOnce: true, 
      });
    
      const { ref: img2Ref, inView: isAllHeroVis } = useInView({
        threshold: 0.25,
        triggerOnce: true,
      });
    
  return (
    <>
     <section className='h-auto w-11/12 m-auto flex flex-col md:flex-row my-4'>
            <div className='h-4/5 cust-border my-3'>
                <h2 className='text-neutral-900 font-bold text-xl md:text-2xl lg:text-3xl'>
                    Soluciones eficientes para tu hogar, empresa o negocio
                </h2>
                <hr />
                <section className='py-4 section-for-pfo'>
                    <p className='text-neutral-900 py-2 text-base md:text-xl lg:text-2xl'>Red fibra óptica
                    </p>
                    <p className='text-neutral-900 py-2 text-base md:text-xl lg:text-2xl'>Instalaciones Eléctricas
                    </p>
                    <p className='text-neutral-900 py-2 text-base md:text-xl lg:text-2xl'>Reparaciones Eléctricas
                    </p>
                    <p className='text-neutral-900 py-2 text-base md:text-xl lg:text-2xl'>Instalación de Cámaras de Seguridad
                    </p>
                    <p className='text-neutral-900 py-2 text-base md:text-xl lg:text-2xl'>Instalación de Redes y Wi-fi
                    </p>
                    <p className='text-neutral-900 py-2 text-base md:text-xl lg:text-2xl'>Porteros Eléctricos
                    </p>
                    <p className='text-neutral-900 py-2 text-base md:text-xl lg:text-2xl'>Instalación de Paneles Solares
                    </p>
                    <p className='text-neutral-900 py-2 text-base md:text-xl lg:text-2xl'>Iluminaria e Iluminación Led
                    </p>
                </section>
            </div>
            <div className='cust-border h-auto w-full flex md:gap-2 flex-col '>
            <div ref={imgRef} 
            style={{
                backgroundImage: 'url(/imgs/panelbox.webp)',
                backgroundSize: '100% 100%',
                backgroundPosition: '100% 50%',
                backgroundRepeat: 'no-repeat'
            }}
            className={`cust-circle py-4 translate-x-[15%] md:translate-x-[20%] transition-all duration-500 ease-in-out w-full min-h-80 h-[320px] ${isHeroVis ? 'reveal-imgs' : ''}`}>
               
                </div>
            <div ref={img2Ref} 
            style={{
                backgroundImage: 'url(/imgs/huj.jpg)',
                backgroundSize: '100% 100%',
                backgroundPosition: '50% 50%',
                backgroundRepeat: 'no-repeat'
            }}
            className={`cust-circle py-2 w-[100%] translate-x-[-15%] transition-all duration-500 ease-in-out md:translate-x-[-20%] min-h-82 h-[340px] ${isAllHeroVis ? 'reveal-img2' : ''}`}>
              
                </div>
                <hr />
            </div>
            
        </section>
        
    </>
  )
}

export default HeroSecond