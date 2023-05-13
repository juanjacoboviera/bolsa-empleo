import React from 'react'
import Nav from '../../components/nav/Nav'
import Perfil from '../../components/perfil/Perfil'
import Modal from '../../components/modal/Modal'
import './administrarCiudadanos.css'

const AdministrarCiudadanos = () => {
  return (
    <>
    <header>
      <Nav></Nav>
      <section className='hero__banner'></section>
    </header>
    <main>
      {/* <Modal></Modal> */}
        <h1 className='page__title'>Perfiles</h1>
        <table>
            <thead>
                <td className='table__title'>ID</td>
                <td className='table__title'>Nombre</td>
                <td className='table__title'>Correo</td>
                <td className='table__title'>Fecha de Nacimiento</td>
                <td className='table__title'>Profesión</td>
                <td className='table__title'>Acciones</td>
            </thead>
            <tbody>
                <Perfil></Perfil>
                <Perfil></Perfil>
                <Perfil></Perfil>
                <Perfil></Perfil>
                <Perfil></Perfil>
            </tbody>
        </table>
    </main>
    </>
  )
}

export default AdministrarCiudadanos