import React from 'react';
import './style.css';
import Nav from './components/nav/Nav'
import RegistroCiudadanos from './pages/moduloRegistroCiudadanos/RegistroCiudadanos'
import RegistroVacantes from './pages/moduloRegistroVacantes/RegistroVacantes'

function App() {
  return (
   <>
   <header>
    <Nav></Nav>
   </header>
   <main>
   {/* <RegistroCiudadanos></RegistroCiudadanos> */}
   <RegistroVacantes></RegistroVacantes>

   </main>
   </>
  );
}

export default App;
