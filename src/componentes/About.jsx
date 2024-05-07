import '../assets/About.css'
import { useInView } from 'react-intersection-observer'

const Nosotros = () => {

    const { ref: secondBoxRef, inView: isSecondBoxVisible } = useInView();

    return (

      <>
    <div className='container-about'>
        <div className='container-sections'>
        <h2>
         POR QUÉ ELEGIRNOS?
        </h2>
    <section className='section-about'>
        <svg className='svg-about' viewBox="0 0 24 24" strokeWidth="1.5" 
        stroke="currentColor" fill="none" strokeLinecap="round" 
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M20.942 13.021a9 9 0 1 0 -9.407 7.967" />
        <path d="M12 7v5l3 3" /><path d="M15 19l2 2l4 -4" />
        </svg><p>
            SERVICIOS EN EL DÍA
        </p>
    </section>
    <section className='section-about'>
        <svg className='svg-about' viewBox="0 0 24 24" strokeWidth="1.5" 
        stroke="currentColor" fill="none" strokeLinecap="round" 
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 
        -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" /><path d="M15 19l2 2l4 -4" />
        </svg> <p>
            PROFESIONALES CERTIFICADOS
        </p>
    </section>
    <section className='section-about'>
        <svg className='svg-about' viewBox="0 0 24 24" strokeWidth="1.5" 
        stroke="currentColor" fill="none" strokeLinecap="round" 
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
        <path d="M12 7h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
        <path d="M10 13v1m0 -8v1" />
        </svg> <p>TRANSPARENCIA DE COSTOS</p>
    </section>
    
    
        </div>
        <div ref={secondBoxRef} className={`div-for-h2 ${isSecondBoxVisible ? 'reveal-div' : ''}`}>
        <h2>Tu tranquilidad eléctrica comienza con nosotros</h2>
        </div>
</div>
      </>
    )
}

export default Nosotros;
