import React from 'react'
import Nav from './Nav'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import { useScrollTop } from './hooks/useScrollTop'

const Contactanos = () => {
  useScrollTop()
  return (
    <div>
        <Nav />
        <div className='pt-[96px]'>
        <Contact />
        <Footer />
        </div>
    </div>
  )
}

export default Contactanos