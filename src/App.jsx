import Nav from './componentes/Nav'
import Section from './componentes/Section'
import Services from './componentes/Works/Services'
import Nosotros from './componentes/About'
import Contact from './componentes/Contact/Contact'
import Whats from './componentes/Contact/Whats'
import Footer from './componentes/Footer/Footer'
import HeroComp from './componentes/HeroComp'


import './index.css'

function App() {

  return (
    <>  

      <Nav />
      <HeroComp />
      <Section />
      <Services />
      <Nosotros />
      <Contact />
      <Whats/>
      <Footer />
    
    </>
  )
}

export default App
