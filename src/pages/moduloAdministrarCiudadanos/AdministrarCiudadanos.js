import React, {useEffect, useState} from 'react'
import Nav from '../../components/nav/Nav'
import Perfil from '../../components/perfil/Perfil'
import './administrarCiudadanos.css'


const AdministrarCiudadanos = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(()=>{
    if(candidates.length == 0){
      const url = 'https://boldsample.com/proyectos/bolsa-empleo/';
      const data = {
        action: 'get',
        table: 'job_offers',
      }
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
        <h1 className='page__title'>Perfiles</h1>
        <table>
            <thead>
              <tr>
                <th className='table__title'>ID</th>
                <th className='table__title'>Nombre</th>
                <th className='table__title'>Correo</th>
                <th className='table__title'>Fecha de Nacimiento</th>
                <th className='table__title'>Profesión</th>
                <th className='table__title'>Acciones</th>
              </tr>
            </thead>
            <tbody>
            {candidates.length == 0? <p>No hay perfiles registrados en la aplicación</p> : candidates.map(candidate => <Perfil key={candidate.id} candidate={candidate} setCandidates={setCandidates}></Perfil>)}
            </tbody>
        </table>
    </main>
    </>
  )
}

export default AdministrarCiudadanos