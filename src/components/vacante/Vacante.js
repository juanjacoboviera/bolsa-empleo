import React, {useEffect, useState} from 'react'
import './vacante.css'

const Vacante = ({offer, candidates}) => {
    const [candidateName, setCandidateName] = useState('')

    const updateField = (evt) => {
        console.log(evt.target.value)
        evt.preventDefault()
        setCandidateName(evt.target.value);
      }

    const salary = offer.salary;
    const formatter = new Intl.NumberFormat('en', {minimumFractionDigits: 0, useGrouping: true,});
    const formattedSalary = formatter.format(salary)

    const applyToOffer = () =>{

    }
    console.log(candidateName)

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
            <select name="" id="">
                <option onChange={updateField}>Seleccione candidato</option>
                {candidates.map(candidate =>  <option value={candidates && candidate.first_name}>{candidates && candidate.first_name} {candidates && candidate.last_name}</option> )}
            </select>
            <button className='generic-button'>Postular</button>
            </div>
            <span className='salary__span'>
                <p>Salario: ${formattedSalary}</p>
            </span>
        </div>
        <div className="description__container">
            <p>{offer.job_description}</p>
        </div>

    </section>
  )
}

export default Vacante