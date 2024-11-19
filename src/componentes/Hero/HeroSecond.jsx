import '../../assets/Newhero.css'
import { useInView } from 'react-intersection-observer';


const HeroSecond = () => {

  const { ref: sectRef,inView: isThisVisible } = useInView({ threshold : 0 });
  const { ref: imgRef, inView: isHeroVis } = useInView();
  const { ref: img2Ref, inView: isAllHeroVis } = useInView();

  return (
    <>
     <section className='h-[100vh] flex'>
            <div className='div-container-fo'>
                <h2 ref={sectRef} className={`text-neutral-900 text-base md:text-2xl lg:text-3xl ${isThisVisible ? 'heading-in' : '' }`}>
                    Brindamos soluciones eficientes para tu hogar, empresa o negocio
                </h2>
                <section className='section-for-pfo'>
                    <p className='text-neutral-900'>Obras Eléctricas
                    </p>
                    <p className='text-neutral-900'>Instalaciones Eléctricas
                    </p>
                    <p className='text-neutral-900'>Reparaciones Eléctricas
                    </p>
                    <p className='text-neutral-900'>Instalación de Cámaras de Seguridad
                    </p>
                    <p className='text-neutral-900'>Instalación de Redes y Wi-fi
                    </p>
                    <p className='text-neutral-900'>Porteros Eléctricos
                    </p>
                    <p className='text-neutral-900'>Instalación de Paneles Solares
                    </p>
                    <p className='text-neutral-900'>Iluminaria e Iluminación Led
                    </p>
                </section>
            </div>
            <div className=''>
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

export default HeroSecond