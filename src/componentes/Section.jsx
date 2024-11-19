import '../assets/Section.css'
import ButtonContact from './Contact/ButtonContact';

export default function Section () {

    return (
       <>
       <main className='relative w-[100vw]'>
        <div className='h-[100vh] w-full'>

        <video src="/imgs/work-galler/paneles/panelsvidcomp.mp4"
        className="h-[100vh] w-full object-cover"
        autoPlay
        loop
        muted
        />
        </div>    
        <div className="main-hero absolute top-[30%] left-[30%] flex gap-3 flex-col items-center w-3/5 md:w-4/5 lg:w-9/12">
            <p className='text-base md:text-xl lg:text-3xl text-slate-50 '>Más de 20 años de experiencia certificada por nuestros clientes.</p>  
            <p className='text-base md:text-xl lg:text-3xl text-slate-50'>Asesoría de primera mano para soluciones energéticas sustentables</p>
                <ButtonContact
                />
        </div>
            
       </main>
       </> 
    )
}