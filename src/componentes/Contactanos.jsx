import React from 'react'
import Nav from './Nav'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'


const Contactanos = () => {
  return (
    <div>
        <Nav />
        <div className='pt-[100px]'>
        <Contact />
        <Footer />
        </div>
    </div>
  )
}

export default Contactanos