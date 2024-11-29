import { Link } from 'react-router-dom';
import '../assets/About.css'
import { useInView } from 'react-intersection-observer'

const Nosotros = () => {

    const { ref: secondBoxRef, inView: isSecondBoxVisible } = useInView();

    return (

      <>
    <div className='container-about'>
        <div className='container-sections'>
        <h2 className='cust-font-h2 text-center text-3xl md:text-4xl lg:text-5xl'>
         POR QUÉ ELEGIRNOS?
        </h2>
       
    <section className='flex justify-between md:justify-evenly gap-5 items-center'>
    <p className='text-xl md:text-2xl lg:text-3xl'>
            SERVICIOS EN EL DÍA
        </p>
        <svg className='svg-about' width="75" viewBox="0 0 24 24" strokeWidth="1" 
        stroke="currentColor" fill="none" strokeLinecap="round" 
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M20.942 13.021a9 9 0 1 0 -9.407 7.967" />
        <path d="M12 7v5l3 3" /><path d="M15 19l2 2l4 -4" />
        </svg>
    </section>
   
  
    <section className='flex justify-between md:justify-evenly gap-5 items-center'>
    <p className='text-xl md:text-2xl lg:text-3xl'>
            PROFESIONALES CERTIFICADOS
        </p>
        <svg className='svg-about' width="75" viewBox="0 0 24 24" strokeWidth="1" 
        stroke="currentColor" fill="none" strokeLinecap="round" 
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 
        -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" /><path d="M15 19l2 2l4 -4" />
        </svg>
    </section>
    <section className='flex justify-between md:justify-evenly gap-5 items-center'>
    <p className='text-xl md:text-2xl lg:text-3xl'>TRANSPARENCIA DE COSTOS</p>
        <svg className='svg-about' width="75" viewBox="0 0 24 24" strokeWidth="1" 
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
        <h2>Nuestra experiencia y dedicación es tu tranquilidad eléctrica</h2>
        <Link to='/contact'>
        <button className='custom-b flex mx-auto my-4 items-center text-xl md:text-2xl lg:text-3xl p-3 gap-3'>
            Contactanos hoy
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
            <path fill="currentColor" fill-rule="evenodd" d="m7.053 2.158l7.243 7.256a.66.66 0 0 1 .204.483a.7.7 0 0 1-.204.497q-3.93 3.834-7.575 7.401c-.125.117-.625.408-1.011-.024c-.386-.433-.152-.81 0-.966l7.068-6.908l-6.747-6.759q-.369-.509.06-.939q.43-.43.962-.04"/>
            </svg>
        </button>
        </Link>
        </div>
</div>
      </>
    )
}

export default Nosotros;
