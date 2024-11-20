import '../assets/About.css'
import { useInView } from 'react-intersection-observer'

const Nosotros = () => {

    const { ref: secondBoxRef, inView: isSecondBoxVisible } = useInView();

    return (

      <>
    <div className='container-about'>
        <div className='container-sections'>
        <h2 className='cust-font-h2 text-3xl md:text-4xl lg:text-5xl'>
         POR QUÉ ELEGIRNOS?
        </h2>
    <section className='flex justify-between items-center'>
    <p className='text-xl md:text-2xl lg:text-3xl'>
            SERVICIOS EN EL DÍA
        </p>
        <svg className='svg-about' width="65" viewBox="0 0 24 24" strokeWidth="1" 
        stroke="currentColor" fill="none" strokeLinecap="round" 
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M20.942 13.021a9 9 0 1 0 -9.407 7.967" />
        <path d="M12 7v5l3 3" /><path d="M15 19l2 2l4 -4" />
        </svg>
    </section>
   
  
    <section className='flex justify-between items-center'>
    <p className='text-xl md:text-2xl lg:text-3xl'>
            PROFESIONALES CERTIFICADOS
        </p>
        <svg className='svg-about' width="65" viewBox="0 0 24 24" strokeWidth="1" 
        stroke="currentColor" fill="none" strokeLinecap="round" 
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 
        -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" /><path d="M15 19l2 2l4 -4" />
        </svg>
    </section>
    <section className='flex justify-between items-center'>
    <p className='text-xl md:text-2xl lg:text-3xl'>TRANSPARENCIA DE COSTOS</p>
        <svg className='svg-about' width="65" viewBox="0 0 24 24" strokeWidth="1" 
        stroke="currentColor" fill="none" strokeLinecap="round" 
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
        <path d="M12 7h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
        <path d="M10 13v1m0 -8v1" />
        </svg> 
    </section>
    
    
        </div>
        <div ref={secondBoxRef} className={`cust-h2 w-full text-center text-xl md:text-2xl lg:text-3xl my-4 px-2 py-3 font-bold ${isSecondBoxVisible ? 'reveal-div' : ''}`}>
        <h2>Tu tranquilidad eléctrica comienza con nosotros</h2>
        </div>
</div>
      </>
    )
}

export default Nosotros;
