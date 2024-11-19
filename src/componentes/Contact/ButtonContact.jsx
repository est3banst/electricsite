import '../../assets/CallButton.css'

const ButtonContact = () => {
  return (
    <div>
        <a className='call-a-cust flex items-center hover:bg-[#058405c1]' href="tel://+59898414718">
                        
                  <div className='flex items-center'>
                  <p className='text-sm md:text-base lg:text-xl'>Contáctanos</p>
                    
                    <svg className='phone-ico' width="24" height="24" viewBox="0 0 24 24" 
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
                  <small>Lunes a Viernes 9:00 - 18:00</small>
                  </span>  
            </a>
    </div>
  )
}

export default ButtonContact