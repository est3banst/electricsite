import Nav from './componentes/Nav'
import Section from './componentes/Section'
import Services from './componentes/Works/Services'
import Nosotros from './componentes/About'
import Contact from './componentes/Contact/Contact'
import Whats from './componentes/Contact/Whats'
import Footer from './componentes/Footer/Footer'
import HeroComp from './componentes/Hero/HeroComp'

import './index.css'


function App() {


  return (
    <>  
    <main 
    className='w-full overflow-hidden md:overflow-visible'
    id='main-app-container'>
    <div className=''>
    <Nav />
    </div>
      <HeroComp />
      <Section />
      <Services />
      <Nosotros />
      <Contact />
      <Whats/>
      <Footer />
      </main>
    </>
  )
}

export default App
