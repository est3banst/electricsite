
const ButtonContact = () => {
  return (
    <div>
        <a className='w-max flex-col uppercase text-slate-50 font-black leading-relaxed px-6 py-3 rounded-full bg-[#058406] flex items-center hover:opacity-65' href="tel://+59898414718">
                        
                  <div className='flex items-center gap-2'>
                  <p className='text-sm md:text-base lg:text-xl'>Contáctanos</p>
                    
                    <svg className='w-5 md:w-6 animate-pulse' viewBox="0 0 24 24" 
                    strokeWidth="2" 
                    stroke="currentColor" 
                    fill="none" strokeLinecap="round" 
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 
                    -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    <path d="M15 9l5 -5" /><path d="M15 5l0 4l4 0" />
                    </svg>
                  </div>
                  <span className='text-xs md:text-sm lg:text-base'>
                  <small className='font-light capitalize'>Lunes a Viernes 9:00 - 18:00</small>
                  </span>  
            </a>
    </div>
  )
}

export default ButtonContact