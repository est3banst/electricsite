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
        <header className='flex justify-around items-center w-full h-full'>

        <a href='/' className='mix-blend-multiply max-h-[200px] mx-3'>
            <img src='/imgs/saltolog.svg' 
                alt='brand logo' 
                className='lg-an h-full max-h-[120px] md:max-h-[170px] lg:max-h-[200px] w-5/6 object-cover'/>
            </a>

            <span className='flex items-center gap-3'>
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
           <div className='flex items-center justify-center'>
           
            <div className="grid h-full text-slate-800 place-content-center bg-transparent">
             <AnimatedHamburgerButton id="nav-icon1" className={`text-slate-800 ${menuIco}`} onClick={settingOpen}>
          
            </AnimatedHamburgerButton> 
            </div>
           </div>
            
           
      </header>
        
        <nav >
       
       <ul id='sidenav' className={displayMenu}>
        
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
          className="relative h-[38px] w-[36px] md:h-[46px] md:w-[46px] border-2 rounded-full bg-white/0 transition-colors hover:bg-white/20"
        >
          <motion.span
            variants={VARIANTS.top}
            className="absolute h-[1.5px] w-5 bg-slate-900"
            style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
          />
          <motion.span
            variants={VARIANTS.middle}
            className="absolute h-[1.5px] w-5 bg-slate-900"
            style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
          />
          <motion.span
            variants={VARIANTS.bottom}
            className="absolute h-[1.5px] w-2 bg-slate-900"
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