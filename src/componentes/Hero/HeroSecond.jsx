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
     <section className='cust-border h-auto w-full m-auto flex flex-col md:flex-row p-6'>
            <div className='h-auto my-3 cust-bg-section'>
                <h2 className='text-slate-100 md:text-slate-50 font-bold text-xl md:text-2xl lg:text-3xl'>
                    Soluciones eficientes para tu hogar, empresa o negocio
                </h2>
                <hr />
                <section className='py-4 section-for-pfo flex flex-col gap-2'>
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
            <div className='h-auto w-4/6 md:w-full flex md:gap-4 flex-col '>
            <div ref={imgRef} 
            style={{
                backgroundImage: 'url(/imgs/panelbox.webp)',
             
            }}
            className={`cust-circle py-4 transition-all duration-500 ease-in-out  ${isHeroVis ? 'reveal-imgs' : ''}`}>
               
                </div>
            <div ref={img2Ref} 
            style={{
                backgroundImage: 'url(/imgs/huj.jpg)',
             
            }}
            className={`cust-circle py-4 transition-all duration-500 ease-in-out ${isAllHeroVis ? 'reveal-img2' : ''}`}>
              
                </div>
                <hr />
            </div>
            
        </section>
        
    </>
  )
}

export default HeroSecond