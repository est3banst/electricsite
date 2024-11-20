import '../../assets/Newhero.css'
import { useInView } from 'react-intersection-observer';


const HeroSecond = () => {

  const { ref: imgRef, inView: isHeroVis } = useInView();
  const { ref: img2Ref, inView: isAllHeroVis } = useInView();

  return (
    <>
     <section className='h-[100vh] w-11/12 m-auto flex flex-col md:flex-row my-4'>
            <div className='h-4/5 cust-border my-3'>
                <h2 className='text-neutral-900 font-bold text-xl md:text-2xl lg:text-3xl'>
                    Soluciones eficientes para tu hogar, empresa o negocio
                </h2>
                <hr />
                <section className='py-4 section-for-pfo'>
                    <p className='text-neutral-900 py-2 text-base md:text-xl lg:text-2xl'>Obras Eléctricas
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
            <div className='cust-border h-full w-full flex flex-col '>
            <div ref={imgRef} 
            style={{
                backgroundImage: 'url(/imgs/panelbox.webp)',
                backgroundSize: '100% 100%',
                backgroundPosition: '100% 100%',
                backgroundRepeat: 'no-repeat'
            }}
            className={`cust-shape py-2 w-full h-full ${isHeroVis ? 'reveal-imgs' : ''}`}>
               
                </div>
            <div ref={img2Ref} 
            style={{
                backgroundImage: 'url(/imgs/huj.jpg)',
                backgroundSize: '100% 100%',
                backgroundPosition: '100% 100%',
                backgroundRepeat: 'no-repeat'
            }}
            className={`cust-shape py-2 w-full h-full ${isAllHeroVis ? 'reveal-img2' : ''}`}>
              
                </div>
                <hr />
            </div>
            
        </section>
        
    </>
  )
}

export default HeroSecond