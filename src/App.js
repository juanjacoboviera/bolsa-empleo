import React from 'react';
import './style.css';
import Nav from './components/nav/Nav'
import RegistroCiudadanos from './pages/moduloRegistroCiudadanos/RegistroCiudadanos'

function App() {
  return (
   <>
   <header>
    <Nav></Nav>
   </header>
   <main>
   <RegistroCiudadanos></RegistroCiudadanos>

   </main>
   </>
  );
}

export default App;
