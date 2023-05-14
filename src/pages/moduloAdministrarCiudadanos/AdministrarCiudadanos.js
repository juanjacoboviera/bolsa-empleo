import React, {useEffect, useState} from 'react'
import Nav from '../../components/nav/Nav'
import Perfil from '../../components/perfil/Perfil'
import Modal from '../../components/modal/Modal'
import './administrarCiudadanos.css'


const AdministrarCiudadanos = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(()=>{
    if(candidates.length == 0){
      const url = 'http://mesopotamico.com/proyectos/bolsa-empleo/';
      const data = {
        action: 'get',
        table: 'job_offers',
      }
      //fetch(url, {method:'POST', mode: 'no-cors', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) }).then(data => data.json())
      fetch(url+'?action=get&table=candidates')
      .then(data=> data.json())
      .then(results => setCandidates(results))
    }
    
  }, [candidates])
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
            {candidates.map(candidate => <Perfil key={candidate.id} candidate={candidate} setCandidates={setCandidates}></Perfil>)}
            </tbody>
        </table>
    </main>
    </>
  )
}

export default AdministrarCiudadanos