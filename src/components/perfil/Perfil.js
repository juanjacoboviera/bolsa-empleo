import React from 'react'
import './perfil.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


const Perfil = () => {
  return (
    <>
    <tr>
        <td>1144041396</td>
        <td>Jacobo Viera</td>
        <td>juanjacoboviera@gmail.com</td>
        <td>11/30/1990</td>
        <td><span className='--profesion__span'>Frontend Dev</span></td>
        <td><button className='table__btn'><FontAwesomeIcon icon={faEdit}/></button><button className='table__btn'><FontAwesomeIcon icon={faClose}/></button></td>             
    </tr>
    </>
  )
}

export default Perfil