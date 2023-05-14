import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='nav'>
        <h1 className='nav__logo'>Bolsa de Empleo</h1>
        <ul className='nav__list'>
          <Link to='/'> <li className='nav__list-item'>Registrar Perfil</li></Link>
          <Link to='/administrar-perfiles'> <li className='nav__list-item'>Administrar Perfiles</li></Link>
          <Link to='/registro-vacantes'> <li className='nav__list-item'>Vacantes Ofertadas</li></Link>
        </ul>
    </nav>
  )
}

export default Nav