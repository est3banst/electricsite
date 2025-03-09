import Nav from '../Nav'
import Footer from '../Footer/Footer'
import Whats from '../Contact/Whats'
import { useScrollTop } from '../hooks/useScrollTop'


import '../../assets/Carousel.css'

export default function Camaras() {
    useScrollTop()
    return (
        <>
        <Nav />
        <section className='section-container pt-[96px]'>
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
                        <img className='route-imgs' src="/imgs/fotos/camera1.jpeg" alt="" />
                        </div>
                        <figcaption>
                        Sistemas de videovigilancia
                            <span className='job-info'>Asegura tu vivienda o negocio con nuestras
                             instalaciones de videovigilancia en el día.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slide">
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/cctv/cctv1.jpg" alt="" />
                        </div>
                        <figcaption>
                        Sistemas de videovigilancia
                            <span className='job-info'>Asegura tu vivienda o negocio con nuestras
                             instalaciones de videovigilancia en el día.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/fotos/camera2.jpeg" alt="" />
                        </div>
                        <figcaption>
                        Sistemas de videovigilancia
                            <span className='job-info'>Asegura tu vivienda o negocio con nuestras
                             instalaciones de videovigilancia en el día.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/fotos/camera3.jpeg" alt="" />
                        </div>
                        <figcaption>
                        Sistemas de videovigilancia
                            <span className='job-info'>Asegura tu vivienda o negocio con nuestras
                             instalaciones de videovigilancia en el día.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/fotos/camera4.jpeg" alt="" />
                        </div>
                        <figcaption>
                        Sistemas de videovigilancia
                            <span className='job-info'>Asegura tu vivienda o negocio con nuestras
                             instalaciones de videovigilancia en el día.</span>
                        </figcaption>
                    </figure>
                </li>
                
                </ul>  
            <ul className='carousel__thumbnails'>
                <li>
                    <label htmlFor='slide-1'><img src="/imgs/fotos/camera1.jpeg" alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-2'><img src='/imgs/work-galler/cctv/cctv1.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-3'><img src="/imgs/fotos/camera2.jpeg" alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-4'><img src="/imgs/fotos/camera3.jpeg" alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-5'><img src="/imgs/fotos/camera4.jpeg" alt="" /></label>
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