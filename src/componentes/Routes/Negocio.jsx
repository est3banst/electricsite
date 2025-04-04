import Nav from '../Nav'
import Footer from '../Footer/Footer'
import Whats from '../Contact/Whats'

import { useScrollTop } from '../hooks/useScrollTop'
import '../../assets/Carousel.css'

export default function Negocio() {
    useScrollTop()
    return (
        <>
        <Nav />
        <section className='section-container pt-[96px]'>
        <div className='container-carousel px-4'>
        <div className='carousel'>
            <input type='radio' name='slides' defaultChecked id='slide-1' />
            <input type='radio' name='slides' id='slide-2' />
            <input type='radio' name='slides' id='slide-3' />
            <input type='radio' name='slides' id='slide-4' />
            <input type='radio' name='slides' id='slide-5' />

            <input type='radio' name='slides' id='slide-6' />
            <ul className='carousel__slides'>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/hugo-fr-o.jpeg" alt="" />
                        </div>
                        <figcaption>
                        Diseño de redes e instalaciones
                            <span className='job-info'>Salto instalaciones es tu equipo de confianza para tus redes de telecomunicaciones
                             </span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/fibra-optica/fibra3.jpeg" alt="" />
                        </div>
                        <figcaption>
                        Diseño de redes e instalaciones
                            <span className='job-info'>Salto instalaciones es tu equipo de confianza para tus redes de telecomunicaciones
                             </span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/fibra-optica/fibra5.jpeg" alt="" />
                        </div>
                        <figcaption>
                        Diseño de redes e instalaciones
                            <span className='job-info'>Salto instalaciones es tu equipo de confianza para tus redes de telecomunicaciones
                             </span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/fibra-optica/fibra4.jpeg" alt="" />
                        </div>
                        <figcaption>
                        Diseño de redes e instalaciones
                            <span className='job-info'>Salto instalaciones es tu equipo de confianza para tus redes de telecomunicaciones
                             </span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/fibra-optica/fibra2.jpeg" alt="" />
                        </div>
                        <figcaption>
                        Diseño de redes e instalaciones
                            <span className='job-info'>Salto instalaciones es tu equipo de confianza para tus redes de telecomunicaciones
                             </span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/fibra-optica/fibra1.jpeg" alt="" />
                        </div>
                        <figcaption>
                        Diseño de redes e instalaciones
                            <span className='job-info'>Salto instalaciones es tu equipo de confianza para tus redes de telecomunicaciones
                             </span>
                        </figcaption>
                    </figure>
                </li>
               
                </ul>  
            <ul className='carousel__thumbnails'>
            <li>
                    <label htmlFor='slide-1'><img src='/imgs/hugo-fr-o.jpeg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-2'><img src='/imgs/work-galler/fibra-optica/fibra3.jpeg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-3'><img src="/imgs/work-galler/fibra-optica/fibra5.jpeg" alt="" /></label>
                </li>
               
                <li>
                    <label htmlFor='slide-4'><img src="/imgs/work-galler/fibra-optica/fibra4.jpeg" alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-5'><img src="/imgs/work-galler/fibra-optica/fibra2.jpeg"  alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-6'><img src="/imgs/work-galler/fibra-optica/fibra1.jpeg" alt="" /></label>
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