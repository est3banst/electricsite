import Nav from '../Nav'
import Footer from '../Footer/Footer'

import Whats from '../Contact/Whats'

import '../../assets/Carousel.css'

export default function Climate() {
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
            <input type='radio' name='slides' id='slide-6' />
            <ul className='carousel__slides'>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/climatizacion/pool.jpg" alt="" />
                        </div>
                        <figcaption>
                        Climatización de piscinas
                            <span className='job-info'>Modernos climatizadores eficientes,utilizando tecnologías 
                        como bombas de calor o intercambiadores de calor. Estos sistemas pueden extraer 
                        calor del aire ambiente o de fuentes naturales, como el sol, para calentar el agua de la piscina.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slide">
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/climatizacion/pool1.jpg" alt="" />
                        </div>
                        <figcaption>
                        Climatización de piscinas
                        <span className='job-info'>Modernos climatizadores eficientes,utilizando tecnologías 
                        como bombas de calor o intercambiadores de calor. Estos sistemas pueden extraer 
                        calor del aire ambiente o de fuentes naturales, como el sol, para calentar el agua de la piscina.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/climatizacion/pool2.jpg" alt="" />
                        </div>
                        <figcaption>
                        Climatización de piscinas
                        <span className='job-info'>Modernos climatizadores eficientes,utilizando tecnologías 
                        como bombas de calor o intercambiadores de calor. Estos sistemas pueden extraer 
                        calor del aire ambiente o de fuentes naturales, como el sol, para calentar el agua de la piscina.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/climatizacion/poolone.jpg" alt="" />
                        </div>
                        <figcaption>
                        Climatización de piscinas
                        <span className='job-info'>Modernos climatizadores eficientes,utilizando tecnologías 
                        como bombas de calor o intercambiadores de calor. Estos sistemas pueden extraer 
                        calor del aire ambiente o de fuentes naturales, como el sol, para calentar el agua de la piscina.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/climatizacion/pooltwo.jpg" alt="" />
                        </div>
                        <figcaption>
                        Climatización de piscinas
                        <span className='job-info'>Modernos climatizadores eficientes,utilizando tecnologías 
                        como bombas de calor o intercambiadores de calor. Estos sistemas pueden extraer 
                        calor del aire ambiente o de fuentes naturales, como el sol, para calentar el agua de la piscina.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/climatizacion/poolthree.jpg" alt="" />
                        </div>
                        <figcaption>
                        Climatización de piscinas
                        <span className='job-info'>Modernos climatizadores eficientes,utilizando tecnologías 
                        como bombas de calor o intercambiadores de calor. Estos sistemas pueden extraer 
                        calor del aire ambiente o de fuentes naturales, como el sol, para calentar el agua de la piscina.</span>
                        </figcaption>
                    </figure>
                </li>
                </ul>  
            <ul className='carousel__thumbnails'>
                <li>
                    <label htmlFor='slide-1'><img src='/imgs/work-galler/climatizacion/pool.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-2'><img src='/imgs/work-galler/climatizacion/pool1.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-3'><img src='/imgs/work-galler/climatizacion/pool2.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-4'><img src='/imgs/work-galler/climatizacion/poolone.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-5'><img src='/imgs/work-galler/climatizacion/pooltwo.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-6'><img src='/imgs/work-galler/climatizacion/poolthree.jpg' alt="" /></label>
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