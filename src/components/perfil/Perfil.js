import React from 'react'
import './perfil.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Perfil = ({candidate, setCandidates}) => {
  const navigate = useNavigate()

  const editCandidate = (e) =>{
    e.preventDefault();
    navigate("/editar-perfiles/"+ candidate.id)
  }

  const deleteCandidate = (e) =>{
    e.preventDefault();
    const url = 'http://mesopotamico.com/proyectos/bolsa-empleo/';
    fetch(url+`?action=delete&table=candidates&row=${candidate.id}`)
    .then(data=> data.json())
    .then(results => setCandidates([]))
    
  }
  return (
    <>
    <tr>
        <td>1144041396</td>
        <td>Jacobo Viera</td>
        <td>juanjacoboviera@gmail.com</td>
        <td>11/30/1990</td>
        <td><span className='--profesion__span'>Frontend Dev</span></td>
        <td><button onClick={editCandidate} className='table__btn'><FontAwesomeIcon icon={faEdit}/></button><button onClick={deleteCandidate} className='table__btn'><FontAwesomeIcon icon={faClose}/></button></td>             
    </tr>
    </>
  )
}

export default Perfil