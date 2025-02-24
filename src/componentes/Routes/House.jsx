import '../../assets/Carousel.css'

import Whats from '../Contact/Whats'
import Nav from  '../Nav'
import Footer from '../Footer/Footer'

export default function House() {
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
                        <img className='route-imgs' src="/imgs/work-galler/house/bath.jpg" alt="" />
                        </div>
                        <figcaption>
                        Instalaciones eléctricas domiciliares
                            <span className='job-info'> Electricistas altamente calificados
                             y listos para atender tus demandas en la comodidad de tu hogar.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slide">
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/house/bath2.jpg" alt="" />
                        </div>
                        <figcaption>
                        Instalaciones eléctricas domiciliares
                            <span className='job-info'> Electricistas altamente calificados
                             y listos para atender tus demandas en la comodidad de tu hogar.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/house/ligths.jpg" alt="" />
                        </div>
                        <figcaption>
                        Instalaciones eléctricas domiciliares
                            <span className='job-info'> Electricistas altamente calificados
                             y listos para atender tus demandas en la comodidad de tu hogar.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/house/ligths2.jpg" alt="" />
                        </div>
                        <figcaption>
                        Instalaciones eléctricas domiciliares
                            <span className='job-info'> Electricistas altamente calificados
                             y listos para atender tus demandas en la comodidad de tu hogar.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/house/houseone.jpg" alt="" />
                        </div>
                        <figcaption>
                        Instalaciones eléctricas domiciliares
                            <span className='job-info'> Electricistas altamente calificados
                             y listos para atender tus demandas en la comodidad de tu hogar.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/house/housetwo.jpg" alt="" />
                        </div>
                        <figcaption>
                        Instalaciones eléctricas domiciliarias
                            <span className='job-info'> Electricistas altamente calificados
                             y listos para atender tus demandas en la comodidad de tu hogar.</span>
                        </figcaption>
                    </figure>
                </li>
                </ul>  
            <ul className='carousel__thumbnails'>
                <li>
                    <label htmlFor='slide-1'><img src='/imgs/work-galler/house/bath.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-2'><img src='/imgs/work-galler/house/bath2.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-3'><img src='/imgs/work-galler/house/ligths.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-4'><img src='/imgs/work-galler/house/ligths2.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-5'><img src='/imgs/work-galler/house/houseone.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-6'><img src='/imgs/work-galler/house/housetwo.jpg' alt="" /></label>
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
            <input type='radio' name='slides' id='slide-11' />
            <input type='radio' name='slides' id='slide-12' />
            <ul className='carousel__slides'>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/house/obrafive.jpg" alt="" />
                        </div>
                        <figcaption>
                        Instalaciones y asesoría en obras
                            <span className='job-info'>Contratar a un buen electricista es crucial para el éxito de tu obra.
                            Desde asesoría de primera mano hasta la planificación y ejecución de instalaciones completas.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slide">
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/house/obraone.jpg" alt="" />
                        </div>
                        <figcaption>
                        Instalaciones y asesoría en obras
                            <span className='job-info'>Contratar a un buen electricista es crucial para el éxito de tu obra.
                            Desde asesoría de primera mano hasta la planificación y ejecucción de instalaciones completas.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/house/obrafour.jpg" alt="" />
                        </div>
                        <figcaption>
                        Instalaciones y asesoría en obras
                            <span className='job-info'>Contratar a un buen electricista es crucial para el éxito de tu obra.
                            Desde asesoría de primera mano hasta la planificación y ejecucción de instalaciones completas.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/house/obraseven.jpg" alt="" />
                        </div>
                        <figcaption>
                        Instalaciones y asesoría en obras
                            <span className='job-info'>Contratar a un buen electricista es crucial para el éxito de tu obra.
                            Desde asesoría de primera mano hasta la planificación y ejecucción de instalaciones completas.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/fotodos.jpeg" alt="" />
                        </div>
                        <figcaption>
                        Instalaciones y asesoría en obras
                            <span className='job-info'>Contratar a un buen electricista es crucial para el éxito de tu obra.
                            Desde asesoría de primera mano hasta la planificación y ejecucción de instalaciones completas.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/fotouno.jpeg" alt="" />
                        </div>
                        <figcaption>
                        Instalaciones y asesoría en obras
                            <span className='job-info'>Contratar a un buen electricista es crucial para el éxito de tu obra.
                            Desde asesoría de primera mano hasta la planificación y ejecucción de instalaciones completas.</span>
                        </figcaption>
                    </figure>
                </li>
                </ul>  
            <ul className='carousel__thumbnails'>
                <li>
                    <label htmlFor='slide-7'><img src='/imgs/work-galler/house/obrafive.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-8'><img src='/imgs/work-galler/house/obraone.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-9'><img src='/imgs/work-galler/house/obrafour.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-10'><img src='/imgs/work-galler/house/obraseven.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-11'><img src='/imgs/fotodos.jpeg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-12'><img src='/imgs/fotouno.jpeg' alt="" /></label>
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