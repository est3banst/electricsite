import Nav from '../Nav'
import Footer from '../Footer/Footer'
import Whats from '../Contact/Whats'

import '../../assets/Carousel.css'

export default function Negocio() {
    return (
        <>
        <Nav />
        <section className='section-container pt-[100px]'>
        <div className='container-carousel'>
        <div className='carousel'>
            <input type='radio' name='slides' defaultChecked id='slide-1' />
            <input type='radio' name='slides' id='slide-2' />
            <input type='radio' name='slides' id='slide-3' />
            <input type='radio' name='slides' id='slide-4' />
            <input type='radio' name='slides' id='slide-5' />
            <ul className='carousel__slides'>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/negocios/lighting.jpeg" alt="" />
                        </div>
                        <figcaption>
                        Instalaciones completas en entornos corporativos
                            <span className='job-info'>Realizamos desde iluminación con sistemas eficientes a estaciones de trabajo completas
                             </span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/negocios/lightsworkspace.jpeg" alt="" />
                        </div>
                        <figcaption>
                        Instalaciones completas en entornos corporativos
                            <span className='job-info'>Realizamos desde iluminación con sistemas eficientes a estaciones de trabajo completas
                             </span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/negocios/lightswork.jpeg" alt="" />
                        </div>
                        <figcaption>
                        Instalaciones completas en entornos corporativos
                            <span className='job-info'>Realizamos desde iluminación con sistemas eficientes a estaciones de trabajo completas
                             </span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/negocios/lightsoff.jpeg" alt="" />
                        </div>
                        <figcaption>
                        Instalaciones completas en entornos corporativos
                            <span className='job-info'>Realizamos desde iluminación con sistemas eficientes a estaciones de trabajo completas
                             </span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/negocios/workspace.jpeg" alt="" />
                        </div>
                        <figcaption>
                        Instalaciones completas en entornos corporativos
                            <span className='job-info'>Realizamos desde iluminación con sistemas eficientes a estaciones de trabajo completas
                             </span>
                        </figcaption>
                    </figure>
                </li>
               
                </ul>  
            <ul className='carousel__thumbnails'>
                <li>
                    <label htmlFor='slide-1'><img src='/imgs/work-galler/negocios/lighting.jpeg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-2'><img src="/imgs/work-galler/negocios/lightsworkspace.jpeg" alt="" /></label>
                </li>
               
                <li>
                    <label htmlFor='slide-3'><img src="/imgs/work-galler/negocios/lightswork.jpeg" alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-4'><img src="/imgs/work-galler/negocios/lightsoff.jpeg"  alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-5'><img src="/imgs/work-galler/negocios/workspace.jpeg" alt="" /></label>
                </li>
               
               
              </ul>
        </div>
    </div>
</section>
        <Whats />
        <Footer />
        </>
    )
}