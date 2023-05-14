import React, {useState, useEffect} from 'react'
import Vacante from '../../components/vacante/Vacante'
import Nav from '../../components/nav/Nav'
import './registroVacantes.css'

const RegistroVacantes = () => {
  const [candidates, setCandidates] = useState([])
  const [jobOffers, setJobOffers] = useState([]);

  useEffect(()=>{
    const url = 'https://boldsample.com/proyectos/bolsa-empleo/';
    
    if(jobOffers.length == 0){
      fetch(url+'?action=get&table=job_offers')
      .then(data=> data.json())
      .then(results => setJobOffers(results))

      fetch(url+'?action=get&table=candidates')
      .then(data=> data.json())
      .then(results =>setCandidates(results))
      
    }
    
  }, [jobOffers])
  
  return (
   <>
    <header>
      <Nav></Nav>
      <section className='hero__vacantes'></section>
   </header>
   <main>
      <h1 className='page__title'>Vacantes</h1>
      {jobOffers.map(offer => <Vacante key={offer.id} offer={offer} candidates={candidates} setJobOffers={setJobOffers}></Vacante>)}
   </main>
   </>

  )
}

export default RegistroVacantes