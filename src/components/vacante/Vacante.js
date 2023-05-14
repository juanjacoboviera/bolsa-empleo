import React from 'react'
import './vacante.css'
const Vacante = ({offer, candidates}) => {
    console.log(candidates)
    const salary = offer.salary;
    const formatter = new Intl.NumberFormat('en', {
    minimumFractionDigits: 0,
    useGrouping: true,
});
const formattedSalary = formatter.format(salary)
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
                <option>Seleccione candidato</option>
                {candidates.map(candidate =>  <option>{candidates && candidate.first_name} {candidates && candidate.last_name}</option> )}
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