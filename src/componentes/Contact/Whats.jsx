export default function Whats() {
    return (
        <>
        <a 
        className="hover:opacity-85"
        href="https://wa.me/+59898414718?text=Hola,%20estoy%20interesado%20en%20un%20presupuesto%20para%20.."
        target="_blank"
        rel='noopener noreferrer'>
        
        <div className='custom-whatsapp p-3 fixed text-slate-50 z-[9989] bottom-3 right-2 flex w-max items-center'>
           <span className="absolute top-0 left-0 bg-red-600 rounded-full w-[18px] h-[18px] custom-animation flex justify-center text-xs font-extralight items-center">1</span>
            <svg className='' width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" fill="none" strokeLinecap="round" 
            strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" 
            fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 
            5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
        </div>
        </a>
    </>
    )
}