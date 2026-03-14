import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Error from './componentes/Error.jsx'
import Service from './componentes/Service.jsx'
import Contactanos from './componentes/Contactanos.jsx'
import { Panel, Negocio, Camaras, Climate, House } from './componentes/Routes/servicePages.jsx'
import Mantenimiento from './componentes/Routes/Mantenimiento.jsx'
import CargadoresEV from './componentes/Routes/Cargadoresev.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/services' element={<Service />} />
        <Route path='/contact' element={<Contactanos />} />
        <Route path='/services/panels' element={<Panel />} />
        <Route path='/services/fibra-optica' element={<Negocio />} />
        <Route path='/services/cctv' element={<Camaras />} />
        <Route path='/services/climate' element={<Climate />} />
        <Route path='/services/house' element={<House />} />
        <Route path='/services/mantenimiento' element={<Mantenimiento />} />
        <Route path='/services/cargadores-ev' element={<CargadoresEV />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)