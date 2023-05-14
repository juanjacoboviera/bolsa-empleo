import React, {useState, useEffect} from 'react'
import Vacante from '../../components/vacante/Vacante'
import Nav from '../../components/nav/Nav'
import './registroVacantes.css'

const RegistroVacantes = () => {
  const [candidates, setCandidates] = useState([])
  const [jobOffers, setJobOffers] = useState([]);

  useEffect(()=>{
    const url = 'http://mesopotamico.com/proyectos/bolsa-empleo/';
    const data = {
      action: 'get',
      table: 'job_offers',
    }
    //fetch(url, {method:'POST', mode: 'no-cors', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) }).then(data => data.json())
    fetch(url+'?action=get&table=job_offers')
    .then(data=> data.json())
    .then(results => setJobOffers(results))
    
  
    fetch(url+'?action=get&table=candidates')
    .then(data=> data.json())
    .then(results =>setCandidates(results))
    
  }, [])
  
  console.log(candidates)
  return (
   <>
    <header>
      <Nav></Nav>
      <section className='hero__vacantes'></section>
   </header>
   <main>
      <h1 className='page__title'>Vacantes</h1>
      {jobOffers.map(offer => <Vacante key={offer.id} offer={offer} candidates={candidates}></Vacante>)}
   </main>
   </>

  )
}

export default RegistroVacantes