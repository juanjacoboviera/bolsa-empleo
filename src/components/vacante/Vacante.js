import React, {useEffect, useState} from 'react'
import swal from 'sweetalert';
import './vacante.css'

const Vacante = ({offer, candidates, setJobOffers}) => {
    const [candidateId, setCandidateId] = useState('')

    const updateField = (evt) => {
        evt.preventDefault()
        setCandidateId(evt.target.value);
      }

    const salary = offer.salary;
    const formatter = new Intl.NumberFormat('en', {minimumFractionDigits: 0, useGrouping: true,});
    const formattedSalary = formatter.format(salary)

    const applyToOffer = () =>{
        if(!candidateId){
            swal("Debes seleccionar un candidato!", "Primero debes seleccionar un candidato y luego oprimir el botón postular!", "warning");

        }else{
            const url = 'https://boldsample.com/proyectos/bolsa-empleo/';
            fetch(url+`?action=get&table=job_offers&condition=candidate%3D${candidateId}`)
            .then(data => data.json())
            .then(results => {
                if(results.length){
                    swal("Candidato no disponible!", "El usuario ya se postuló a otra vacante!", "warning")

                }else{
                        fetch(url+`?action=update&table=job_offers&row=${offer.id}&fields=candidate&values=${candidateId}`)
                        .then(data=> data.json())
                        .then(results =>{
                          swal("Usuario Postulado!", "El usuario se ha Postulado de manera exitosa!", "success")
                          setJobOffers([]);
                        
                        })
                    
                }
                
            })
            
           
        }

    }
    

  return (
    <section className='container --jobOffer-modification'>
        <div className="header__container">
            <div className="titles__container">
                <h1>{offer.job_title}</h1>
                <h2 className='company__title'>/{offer.company_name}</h2>
            </div>
            <span className='code__span'>
                <h2>RS00{offer.id}</h2>
            </span>
        </div>
        <div className="actions__container">
            <div className="assign-candidate__container">
            <select value={offer?.candidate || candidateId} disabled={offer?.candidate} name="" id="" onChange={updateField}>
                <option>Seleccione candidato</option>
                {candidates.map(candidate =>  <option key={candidate.id}  value={candidate.id}>{candidate?.first_name} {candidate?.last_name}</option> )}
            </select>
            <button onClick={applyToOffer} disabled={offer.candidate} className='generic-button'>{offer?.candidate ? "No Disponible" : "Postular"}</button>
            </div>
            <span className='salary__span'>
                <p>Salario: ${formattedSalary}</p>
            </span>
        </div>
        <div className="description__container">
            <p>{offer?.job_description}</p>
        </div>

    </section>
  )
}

export default Vacante