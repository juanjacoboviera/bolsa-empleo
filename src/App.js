import React from 'react';
import './style.css';
import Nav from './components/nav/Nav'
import RegistroCiudadanos from './pages/moduloRegistroCiudadanos/RegistroCiudadanos'
import RegistroVacantes from './pages/moduloRegistroVacantes/RegistroVacantes'
import AdministrarCiudadanos from './pages/moduloAdministrarCiudadanos/AdministrarCiudadanos'

function App() {
  return (
   <>
   <RegistroCiudadanos></RegistroCiudadanos>
   {/* <RegistroVacantes></RegistroVacantes> */}
   {/* <AdministrarCiudadanos></AdministrarCiudadanos> */}

   </>
  );
}

export default App;
