import React from 'react'
import Nav from './Nav'
import Services from './Works/Services'
import Footer from './Footer/Footer'

const Service = () => {
  return (
    <div>
        <Nav />
        <div className='pt-[100px]'>
        <Services />
        <Footer />
        </div>
    </div>
  )
}

export default Service