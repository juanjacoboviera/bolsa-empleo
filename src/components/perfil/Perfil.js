import React from 'react'
import './perfil.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

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
    swal("Perfil Eliminado!", "El candidato se ha eliminado de manera éxitosa", "success");

    
  }
  return (
    <>
    <tr>
        <td>{candidate.document_number}</td>
        <td>{candidate.first_name} {candidate.last_name}</td>
        <td>{candidate.email}</td>
        <td>{candidate.dob}</td>
        <td><span className='--profesion__span'>{candidate.profession}</span></td>
        <td><button onClick={editCandidate} className='table__btn'><FontAwesomeIcon icon={faEdit}/></button><button onClick={deleteCandidate} className='table__btn'><FontAwesomeIcon icon={faClose}/></button></td>             
    </tr>
    </>
  )
}

export default Perfil