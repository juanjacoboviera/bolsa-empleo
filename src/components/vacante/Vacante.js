import React from 'react'
import './vacante.css'
const Vacante = () => {
  return (
    <section className='container --jobOffer-modification'>
        <div className="header__container">
            <div className="titles__container">
                <h1>Ingeniero Industrial</h1>
                <h2 className='company__title'>/EPM</h2>
            </div>
            <span className='code__span'>
                <h2>RS001</h2>
            </span>
        </div>
        <div className="actions__container">
            <div className="assign-candidate__container">
            <select name="" id="">
                <option>Seleccione candidato</option>
                <option>Juan Jacobo Viera</option>
                <option>René Orozco</option>
                <option>Alejandro Lozano</option>
                <option>Walter López</option>
            </select>
            <button className='generic-button'>Postular</button>
            </div>
            <span className='salary__span'>
                <p>Salario: 1'200.000</p>
            </span>
        </div>
        <div className="description__container">
            <p>Se requiere Ingeniero Industrial con mínimo 2 años de experiencia en Salud Ocupacional</p>
        </div>

    </section>
  )
}

export default Vacante