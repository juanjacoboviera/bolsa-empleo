import React from 'react'
import Vacante from '../../components/vacante/Vacante'
import Nav from '../../components/nav/Nav'
import './registroVacantes.css'

const RegistroVacantes = () => {
  return (
   <>
    <header>
      <Nav></Nav>
      <section className='hero__banner'></section>
   </header>
   <main>
      <h1 className='page__title'>Vacantes</h1>
      <Vacante></Vacante>
   </main>
   </>

  )
}

export default RegistroVacantes