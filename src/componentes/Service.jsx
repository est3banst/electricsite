import React from 'react'
import Nav from './Nav'
import Services from './Works/Services'
import Footer from './Footer/Footer'
import { useScrollTop } from './hooks/useScrollTop'


const Service = () => {
  useScrollTop()
  return (
    <div>
        <Nav />
        <div className='pt-[95px]'>
        <Services />
        <Footer />
        </div>
    </div>
  )
}

export default Service