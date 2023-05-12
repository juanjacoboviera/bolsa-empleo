import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <nav className='nav'>
        <h1 className='nav__logo'>Bolsa de Empleo</h1>
        <ul className='nav__list'>
            <li className='nav__list-item'>Registrar Perfil</li>
            <li className='nav__list-item'> Administrar Perfiles</li>
            <li className='nav__list-item'>Vacantes Ofertadas</li>
        </ul>
    </nav>
  )
}

export default Nav