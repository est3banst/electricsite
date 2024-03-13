import { useState, useRef, useEffect } from 'react'
import '../assets/Section.css'
import { picsSection } from './data/picts'

export default function Section () {

    const [currentIdx, setCurrentIndex] = useState(0);
    const heroRef = useRef();

    useEffect(() => {
        const heroImgs = heroRef.current
       
        const imgWidth = heroImgs.clientWidth;
       
        const scrollPosition = currentIdx * imgWidth;
       
        heroImgs.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        })
      
    },[currentIdx])

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % picsSection.length);
        }, 2500);
    
        return () => clearInterval(intervalId);
      }, [currentIdx, picsSection.length]);
    

    const goToPicture = (indexPict) => {
        setCurrentIndex(indexPict)
    }
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
            <p className='hero-cta-p'>Más de 20 años de experiencia certificada por nuestros clientes.</p>  
            <p className='hero-cta-p'>Comunicate hoy para agendar una visita
             <strong> sin costo</strong></p>
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