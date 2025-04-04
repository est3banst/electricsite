import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Error from './componentes/Error.jsx'
import House from './componentes/Routes/House.jsx'
import Panel from './componentes/Routes/Panel.jsx'
import Negocio from './componentes/Routes/Negocio.jsx'
import Camaras from './componentes/Routes/Camaras.jsx'
import Climate from './componentes/Routes/Climate.jsx'
import Service from './componentes/Service.jsx'
import Contactanos from './componentes/Contactanos.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom' 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/services' element={<Service/>} />
      <Route path='/contact' element={<Contactanos/>} />
      <Route path='/services/panels' element={<Panel/>} />
      <Route path='/services/fibra-optica' element={<Negocio/>} />
      <Route path='/services/cctv' element={<Camaras/>} />
      <Route path='/services/climate' element={<Climate/>} />
      <Route path='/services/house' element={<House/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
