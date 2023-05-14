import React from 'react';
import './style.css';
import Nav from './components/nav/Nav'
import RegistroCiudadanos from './pages/moduloRegistroCiudadanos/RegistroCiudadanos'
import RegistroVacantes from './pages/moduloRegistroVacantes/RegistroVacantes'
import AdministrarCiudadanos from './pages/moduloAdministrarCiudadanos/AdministrarCiudadanos'
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route exact path="/" element={<RegistroCiudadanos/>}/>
   <Route exact path="/editar-perfiles/:id" element={<RegistroCiudadanos/>}/>
   <Route exact path="/registro-vacantes" element={<RegistroVacantes/>}/>
   <Route exact path="/administrar-perfiles" element={<AdministrarCiudadanos/>}/>
   </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
