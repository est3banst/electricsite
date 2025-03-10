import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'

const Nosotros = () => {
    const bgImg = "imgs/planos.jpeg"

    const { ref: secondBoxRef, inView: isSecondBoxVisible } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    return (

      <>
    <div className="container-about" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>

        <div className='bg-[#17171789] flex flex-col m-auto p-4 backdrop-blur-xs rounded-es-2xl w-5/6 text-sky-50'>
        <h2 className='text-xl border-b-4 my-2 pb-2 font-black leading-relaxed md:text-2xl lg:text-3xl'>
         POR QUÉ ELEGIRNOS?
        </h2>
       
    <section className='flex justify-between px-4 items-center'>
    <p className='text-xl md:text-2xl'>
            SERVICIOS EN EL DÍA
        </p>
        <svg 
        className='svg-about flex-shrink-0' 
        width="75" height="75" viewBox="0 0 24 24" strokeWidth="2" 
        stroke="currentColor" fill="none" strokeLinecap="round" 
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M20.942 13.021a9 9 0 1 0 -9.407 7.967" />
        <path d="M12 7v5l3 3" /><path d="M15 19l2 2l4 -4" />
        </svg>
    </section>
   
  
    <section className='flex justify-between px-4 items-center'>
    <p className='text-xl md:text-2xl'>
            PROFESIONALES CERTIFICADOS
        </p>
        <svg 
        className='svg-about flex-shrink-0' 
        width="75" height="75" viewBox="0 0 24 24" strokeWidth="2" 
        stroke="currentColor" fill="none" strokeLinecap="round" 
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 
        -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" /><path d="M15 19l2 2l4 -4" />
        </svg>
    </section>
    <section className='flex justify-between px-4 items-center'>
    <p className='text-xl md:text-2xl'>TRANSPARENCIA DE COSTOS</p>
        <svg className='svg-about flex-shrink-0' width="75" height="75" viewBox="0 0 24 24" strokeWidth="2" 
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
        <div ref={secondBoxRef} className={`bg-[#535353b1] w-full text-center text-xl md:text-2xl lg:text-3xl my-4 px-2 py-3 opacity-0 -translate-y-full transition-all duration-1000 font-bold ${isSecondBoxVisible ? 'opacity-100 translate-y-0' : ''}`}>
        <h2 className='text-slate-50'>Nuestra experiencia y dedicación es tu tranquilidad eléctrica</h2>
        <Link to='/contact'>
        <button className='custom-b flex mx-auto my-4 items-center text-xl md:text-2xl lg:text-3xl p-3 gap-3'>
            Contactanos hoy
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
            <path fill="currentColor" fillRule="evenodd" d="m7.053 2.158l7.243 7.256a.66.66 0 0 1 .204.483a.7.7 0 0 1-.204.497q-3.93 3.834-7.575 7.401c-.125.117-.625.408-1.011-.024c-.386-.433-.152-.81 0-.966l7.068-6.908l-6.747-6.759q-.369-.509.06-.939q.43-.43.962-.04"/>
            </svg>
        </button>
        </Link>
        </div>
</div>
      </>
    )
}

export default Nosotros;
