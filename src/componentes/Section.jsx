import { useRef } from 'react'
import useAutoScroll from './hooks/useAutoScroll';
import '../assets/Section.css'
import { picsSection } from './data/picts'

export default function Section () {

    
    const heroRef = useRef();
    const { currentIdx, goToPicture } = useAutoScroll(picsSection, 2500, heroRef)

    return (
       <>
       <main className='main-hero-section'>
        <div className='container-section'>
           <ul ref={heroRef} 
           className='imgs-hero' >
            {picsSection.map((pict, index) => (
                <li className='container-imgs' key={index}>
                    <img 
                    className='img-hero'
                    src={pict.imgSrc} 
                    alt="" />
                </li>
            ))}
           </ul>
            </div>
            
        <div className="hero-cta">
            <p className='hero-cta-p'>Somos una empresa con más de 20 años de experiencia certificada por nuestros clientes.</p>  
            <p className='hero-cta-p'>Nos especializamos en soluciones eléctricas integrales</p>

        </div>
          
       <div className='dot-for-img'>
            {
                picsSection.map((_, ind) => (
                    <div 
                    className={`dots-img ${ind === currentIdx ? 'active' : ''}`}
                    onClick={() => goToPicture(ind)}
                    key={ind}>
                    &#9865;
                        </div>
                ))
            }
           </div>
            
       </main>
       </> 
    )
}