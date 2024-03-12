import Nav from '../Nav'
import Footer from '../Footer/Footer'
import Whats from '../Contact/Whats'

import '../../assets/Carousel.css'

export default function Panel() {
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
                        <img className='route-imgs' src="/imgs/work-galler/paneles/panel.jpg" alt="" />
                        </div>
                        <figcaption>
                        Instalación de paneles solares
                        <span className='job-info'>Por qué no aprovechar la energía del sol para reducir tus costes energéticos?
                            Hacé la elección inteligente elegí la energía solar!</span>
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slide">
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/paneles/panelone.jpg" alt="" />
                        </div>
                        <figcaption>
                        Instalación de paneles solares
                        <span className='job-info'>Por qué no aprovechar la energía del sol para reducir tus costes energéticos?
                            Hacé la elección inteligente elegí la energía solar!</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/paneles/paneltwo.jpg" alt="" />
                        </div>
                        <figcaption>
                        Instalación de paneles solares
                        <span className='job-info'>Por qué no aprovechar la energía del sol para reducir tus costes energéticos?
                            Hacé la elección inteligente elegí la energía solar!</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/paneles/panelthree.jpg" alt="" />
                        </div>
                        <figcaption>
                        Instalación de paneles solares
                            <span className='job-info'>Por qué no aprovechar la energía del sol para reducir tus costes energéticos?
                            Hacé la elección inteligente elegí la energía solar!</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/paneles/panelfour.jpg" alt="" />
                        </div>
                        <figcaption>
                        Instalación de paneles solares
                        <span className='job-info'>Por qué no aprovechar la energía del sol para reducir tus costes energéticos?
                            Hacé la elección inteligente elegí la energía solar!</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/paneles/panelfive.jpg" alt="" />
                        </div>
                        <figcaption>
                        Instalación de paneles solares
                        <span className='job-info'>Por qué no aprovechar la energía del sol para reducir tus costes energéticos?
                            Hacé la elección inteligente elegí la energía solar!</span>
                        </figcaption>
                    </figure>
                </li>
                </ul>  
            <ul className='carousel__thumbnails'>
                <li>
                    <label htmlFor='slide-1'><img src='/imgs/work-galler/paneles/panel.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-2'><img src='/imgs/work-galler/paneles/panelone.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-3'><img src='/imgs/work-galler/paneles/paneltwo.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-4'><img src='/imgs/work-galler/paneles/panelthree.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-5'><img src='/imgs/work-galler/paneles/panelfour.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-6'><img src='/imgs/work-galler/paneles/panelfive.jpg' alt="" /></label>
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