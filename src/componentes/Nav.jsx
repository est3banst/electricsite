import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { Link } from 'react-router-dom';
import '../assets/Nav.css';


const Nav = () => {

    const [isOpen, setItOpen] = useState(false);
    const menuIco = isOpen ? 'open' : '';
    
    const displayMenu = isOpen ? 'header-ul-visible' : 'header-ul';
    const settingOpen = () => {
        setItOpen(!isOpen)
    }
   
    return (
        <>
        <header className='flex fixed top-0 z-[9877] backdrop-blur-0 bg-white/20 justify-around md:justify-between items-center rounded-b-xl w-full h-auto shadow-xl'>

        <a href='/' className='md:hidden mix-blend-multiply h-auto mx-3'>
        <motion.img 
    src='/imgs/erasebglogo.png' 
    alt='brand logo' 
    className='lg-an max-h-[110px] md:max-h-[115px] lg:max-h-[119px] w-5/6 object-contain'
    animate={{
        scale: [1, 1.01, 1.03, 1.03, 1.01, 1],
    }}
    transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
    }}
/>
            </a>
      <div className="h-auto hidden md:flex md:w-3/6 md:justify-start">
      <a href='/' className='mix-blend-multiply h-auto mx-3'>
      <motion.img 
    src='/imgs/erasebglogo.png' 
    alt='brand logo' 
    className='lg-an max-h-[110px] md:max-h-[115px] lg:max-h-[119px] w-5/6 object-contain'
    animate={{
        scale: [1, 1.01, 1.03, 1.03, 1.01, 1],
    }}
    transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
    }}
/>
            </a>

            <ol className="hidden md:flex justify-center w-4/6 items-center gap-4 uppercase">
             <Link className="rounded-2xl hover:bg-[#f2f2f2] border p-2" to='/'> 
             <li className="text-slate-950 font-bold p-2 text-xl">Inicio</li>
             </Link>
             <Link className="rounded-2xl  hover:bg-[#f2f2f2] border p-2" to='/services'>
             <li className="text-slate-950 font-bold p-2 text-xl">Servicios</li>
             </Link> 
             <Link className="rounded-2xl  hover:bg-[#f2f2f2] border p-2" to='/contact'>
              <li className="text-slate-950 font-bold p-2 text-xl">Contacto</li>
             </Link>
            </ol>
      </div>

            <span className='flex items-center justify-center md:w-2/6 gap-3'>
            <a id="insta" href="https://www.instagram.com/saltoinstalaciones/">
                
                <svg className='' width="34" height="34" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" fill="none" strokeLinecap="round" 
                    strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 
                    0 1 -4 -4z" />
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" />
                </svg>
               
            </a>
            <a id="face" href="https://www.facebook.com/salto.salto.9678?mibextid=ZbWKwL">
                
                <svg className='' width="34" height="34" viewBox="0 0 24 24" strokeWidth="2" 
                    stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
            </a>

            </span>
           
            <div className="grid md:hidden h-full text-slate-800 place-content-center" onClick={settingOpen}>
             <AnimatedHamburgerButton id="nav-icon1" className={`text-slate-800 ${menuIco}`}>
          
            </AnimatedHamburgerButton> 
            </div>
         
            
           
      </header>
        
        <nav className="md:hidden" >
       <div className={`${displayMenu} flex flex-col gap-3 justify-center md:items-center`}>
       <ul id='sidenav' className='relative md:hidden'>
        
        <Link to='/'> 
        <li className="nav-link">
            <h2 className='h2-navigation' data-name="Inicio">Inicio</h2>
        </li>
        </Link>
       
        <Link to='/services'>
        <li className="nav-link">
            <h2 className='h2-navigation' data-name="Servicios">Servicios</h2>
        </li>
        </Link>
        <Link to='/contact'>
        <li className="nav-link">
            <h2 className='h2-navigation' data-name="Contacto">Contacto</h2>
        </li>
        </Link>
        
    </ul>
    <hr className="text-slate-900" />
    <div className="w-full mt-10 md:text-center">
            <small className="text-xs md:text-base">Servicio técnico especializado</small>
           
            </div>
       </div>
        
        </nav>
        </>
    )
}
const AnimatedHamburgerButton = () => {
    const [active, setActive] = useState(false);
    return (
      <MotionConfig
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <motion.button
          initial={false}
          animate={active ? "open" : "closed"}
          onClick={() => setActive((pv) => !pv)}
          className="relative h-16 w-15 border-2 border-slate-900 rounded-full bg-white/20 transition-colors hover:bg-white/20"
        >
          <motion.span
            variants={VARIANTS.top}
            className="absolute h-[4px] w-9 bg-slate-900 rounded-full"
            style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
          />
          <motion.span
            variants={VARIANTS.middle}
            className="absolute h-[4px] w-9 bg-slate-900 rounded-full"
            style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
          />
          <motion.span
            variants={VARIANTS.bottom}
            className="absolute h-[4px] w-4 bg-slate-900 rounded-full"
            style={{
              x: "-50%",
              y: "50%",
              bottom: "35%",
              left: "calc(50% + 10px)",
            }}
          />
        </motion.button>
      </MotionConfig>
    );
  };
  
  const VARIANTS = {
    top: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        top: ["35%", "50%", "50%"],
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "35%"],
      },
    },
    middle: {
      open: {
        rotate: ["0deg", "0deg", "-45deg"],
      },
      closed: {
        rotate: ["-45deg", "0deg", "0deg"],
      },
    },
    bottom: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["35%", "50%", "50%"],
        left: "50%",
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "35%"],
        left: "calc(50% + 10px)",
      },
    },
  };

export default Nav;