import React from 'react'
import Nav from '../../components/nav/Nav'
import './registroCiudadano.css'


const RegistroCiudadanos = () => {
  return (
    <>
    <header>
      <Nav></Nav>
    </header>
    <main>
      <section className='container --form-modification'>
        <div className="form__description">
          <h1 className='form__title'>Registra tu Perfil</h1>
          <p>Conviertete en un miembro de nuestra bolsa de empleo y recibe beneficios.</p>
        </div>
        <form className='form__registration' action="">
          <div className="input__container">
              <label htmlFor="idType">Tipo de Documento</label>
              <select name="" id="idType">
              <option value="">Cédula de Ciudadanía</option>
              <option value="">Cédula de Extranjería</option>
              <option value="">Pasaporte</option>
              <option value="">Otro</option>
            </select>
          </div>
            <div className="input__container">
              <label htmlFor="document">Número de documento</label>
              <input id='document' type="number" />
            </div>
            <div className="input__container">
              <label htmlFor="names">Nombres</label>
              <input id='names' type="text" />
            </div>
            <div className="input__container">
              <label htmlFor="lastName">Apellidos</label>
              <input id='lastName' type="text" />
            </div>
            <div className="input__container">
              <label htmlFor="dob">Fecha de nacimiento</label>
              <input id='dob' type="date" />
            </div>
            <div className="input__container">
              <label htmlFor="ocupation">Profesión</label>
              <input id='ocupation' type="text" />
            </div>
            <div className="input__container">
              <label htmlFor="salary">Aspiración Salarial</label>
              <input id='salary' type="number" />
            </div>
            <div className="input__container">
              <label htmlFor="email">E-mail</label>
              <input id='email' type="email" />
            </div>
            <div className="button__container">
            <button className='generic-button'>Crear Perfil</button>
            </div>
        </form>
      </section>
    </main>
    </>
  )
}

export default RegistroCiudadanos