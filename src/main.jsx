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

import { createBrowserRouter, RouterProvider } from 'react-router-dom' 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />
  },
  {
    path:'/services',
    element: <Service />
  },
  {
    path: '/contact',
    element: <Contactanos />
  },
  {
    path:'/viviendas',
    element: <House />,
  },
  {
    path:'/paneles',
    element: <Panel />
  },
  {
    path:'/industria',
    element: <Negocio />
  },
  {
    path:'/cctv',
    element: <Camaras />
  },
  {
    path:'climatizacion',
    element: <Climate />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
