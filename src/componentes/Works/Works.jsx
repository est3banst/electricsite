import '../../assets/Works.css'
import Button from './Button';

export default function Works (props) {
    return (
        <>
       
        <article className='article-container'>
            <section className='article-section'>
                <div className='section-div'>
                    <img 
                    src={props.src} 
                    alt={props.alt} />
                   
                </div>
                <div className='container-for-work'>
                    <p>{props.title}</p>
                    <p>{props.descr}</p>
                </div>
                <Button />
            </section>

        </article>
     
       
        </>
    )
}