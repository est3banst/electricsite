import Nav from '../Nav'
import Footer from '../Footer/Footer'
import Whats from '../Contact/Whats'

import '../../assets/Carousel.css'

export default function Negocio() {
    return (
        <>
        <Nav />
        <section className='section-container'>
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
                        <img className='route-imgs' src="/imgs/work-galler/negocios/industrial1.jpg" alt="" />
                        </div>
                        <figcaption>
                        Mantenimiento de silla salvaescaleras
                            <span className='job-info'>Realizamos los procesos necesarios para garantizar el correcto
                            funcionamiento de equipamiento especializado.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slide">
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/negocios/industrial2.jpg" alt="" />
                        </div>
                        <figcaption>
                        Mantenimiento de silla salvaescaleras
                            <span className='job-info'>Realizamos los procesos necesarios para garantizar el correcto
                            funcionamiento de equipamiento especializado.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/negocios/industrial4.jpg" alt="" />
                        </div>
                        <figcaption>
                        Mantenimiento de silla salvaescaleras
                            <span className='job-info'>Realizamos los procesos necesarios para garantizar el correcto
                            funcionamiento de equipamiento especializado.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/negocios/elevador.jpg" alt="" />
                        </div>
                        <figcaption>
                        Elevador para personas con movilidad limitada
                            <span className='job-info'>Puesta en funcionamiento de plataforma 
                            para sillas de rueda.
                        En UTEC Paysandú.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/negocios/elevador1.jpg" alt="" />
                        </div>
                        <figcaption>
                        Elevador para personas con movilidad limitada
                            <span className='job-info'>Puesta en funcionamiento de plataforma 
                            para sillas de rueda.
                        En UTEC Paysandú.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/negocios/elevador2.jpg" alt="" />
                        </div>
                        <figcaption>
                        Elevador para personas con movilidad limitada
                            <span className='job-info'>Puesta en funcionamiento de plataforma 
                            para sillas de rueda.
                        En UTEC Paysandú.</span>
                        </figcaption>
                    </figure>
                </li>
                </ul>  
            <ul className='carousel__thumbnails'>
                <li>
                    <label htmlFor='slide-1'><img src='/imgs/work-galler/negocios/industrial1.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-2'><img src='/imgs/work-galler/negocios/industrial2.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-3'><img src='/imgs/work-galler/negocios/industrial4.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-4'><img src='/imgs/work-galler/negocios/elevador.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-5'><img src='/imgs/work-galler/negocios/elevador1.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-6'><img src='/imgs/work-galler/negocios/elevador2.jpg' alt="" /></label>
                </li>
            </ul>
        </div>
    </div>
</section>

<section className='section-container'>
        <div className='container-carousel'>
        <div className='carousel'>
            <input type='radio' name='slides' defaultChecked id='slide-7' />
            <input type='radio' name='slides' id='slide-8' />
            <input type='radio' name='slides' id='slide-9' />
            <input type='radio' name='slides' id='slide-10' />
            <ul className='carousel__slides'>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/negocios/hormigonera.jpg" alt="" />
                        </div>
                        <figcaption>
                        Mantenimiento de sistema eléctrico de planta móvil de hormigón
                            <span className='job-info'>El mantenimiento periódico de sistemas de alta
                            tensión es clave para garantizar la continuidad de las operaciones.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slide">
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/negocios/hormigonera1.jpg" alt="" />
                        </div>
                        <figcaption>
                        Mantenimiento de sistema eléctrico de planta móvil de hormigón
                            <span className='job-info'>El mantenimiento periódico de sistemas de alta
                            tensión es clave para garantizar la continuidad de las operaciones.</span>
                        </figcaption>
                    </figure>
                </li>
                
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/negocios/mantenimiento.jpg" alt="" />
                        </div>
                        <figcaption>
                        Mantenimiento integral de montacargas de nivel industrial
                            <span className='job-info'>El mantenimiento y las revisiones regulares 
                            de instalaciones eléctricas industriales son esenciales para garantizar la seguridad,
                            la eficiencia y la conformidad con regulaciones.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/negocios/mantenimiento1.jpg" alt="" />
                        </div>
                        <figcaption>
                        Mantenimiento integral de montacargas de nivel industrial
                            <span className='job-info'>El mantenimiento y las revisiones regulares 
                            de instalaciones eléctricas industriales son esenciales para garantizar la seguridad,
                            la eficiencia y la conformidad con regulaciones.</span>
                        </figcaption>
                    </figure>
                </li>
                
                </ul>  
            <ul className='carousel__thumbnails'>
                <li>
                    <label htmlFor='slide-7'><img src='/imgs/work-galler/negocios/hormigonera.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-8'><img src='/imgs/work-galler/negocios/hormigonera1.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-9'><img src='/imgs/work-galler/negocios/mantenimiento.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-10'><img src='/imgs/work-galler/negocios/mantenimiento1.jpg' alt="" /></label>
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