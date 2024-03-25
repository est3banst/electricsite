import '../../assets/Newhero.css'
import { useInView } from 'react-intersection-observer'

const HeroSecond = () => {

  const { ref: sectRef,inView: isThisVisible } = useInView();
  const { ref: sectToRef,inView: isAllThisVisible } = useInView();

  return (
    <>
     <section className='section-container-fo'>
            <div className='div-container-fo'>
                <h2 ref={sectRef} className={`text-h2-fo ${isThisVisible ? 'heading-in' : '' }`}>
                    Brindamos soluciones eficientes para tu hogar, empresa o negocio
                </h2>
                <section className='section-for-pfo'>
                    <p className='text-pfo'>Obras Eléctricas
                    </p>
                    <p className='text-pfo'>Instalaciones Eléctricas
                    </p>
                    <p className='text-pfo'>Reparaciones Eléctricas
                    </p>
                    <p className='text-pfo'>Instalación de Cámaras de Seguridad
                    </p>
                    <p className='text-pfo'>Instalación de Redes y Wi-fi
                    </p>
                    <p className='text-pfo'>Porteros Eléctricos
                    </p>
                    <p className='text-pfo'>Instalación de Paneles Solares
                    </p>
                    <p className='text-pfo'>Iluminaria e Iluminación Led
                    </p>
                </section>
            </div>
            <section ref={sectToRef} className={`container-section-tablero ${isAllThisVisible ? 'tablero-in' : ''}`}>
              <section>
                  
                  </section>
            </section>
            
        </section>
    </>
  )
}

export default HeroSecond