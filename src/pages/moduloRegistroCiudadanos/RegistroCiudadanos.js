import React, {useState, useEffect} from 'react'
import Nav from '../../components/nav/Nav'
import './registroCiudadano.css'
import { useNavigate } from 'react-router-dom'

const RegistroCiudadanos = () => {
  
  const [employee, setEmployee ] = useState({})
  const [documentTypes, setDocumentTypes] = useState([]);
  const navigate = useNavigate()
  
  useEffect(()=>{
    const url = 'http://mesopotamico.com/proyectos/bolsa-empleo/';
    const data = {
      action: 'get',
      table: 'job_offers',
    }
    //fetch(url, {method:'POST', mode: 'no-cors', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) }).then(data => data.json())
    fetch(url+'?action=get&table=document_type')
    .then(data=> data.json())
    .then(results => setDocumentTypes(results))
    
  }, [])

  const updateFields = (evt) => {
    evt.preventDefault()
    setEmployee({...employee, [evt.target.name]: evt.target.value});
  }

  const createEmployee = (e) =>{
    e.preventDefault()
    const url = 'http://mesopotamico.com/proyectos/bolsa-empleo/';
    let fields = []
    let values = []
    for(let field in employee){
      fields.push(field);
      values.push(employee[field])
    }
    fields = fields.join(',')
    values = values.join(',')

    fetch(url+`?action=save&table=candidates&fields=${fields}&values=${values}`)
    .then(data=> data.json())
    .then(results => navigate("/editar-perfiles/"+ results.id))
  }

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
              <select name="document_type" id="idType" value={employee.document_type} onChange={updateFields}>
                <option value="">Selecciona un tipo</option> 
              {documentTypes.map(type =>  <option key={type.id} value={type.id} >{type.type_name}</option> )}
            </select>
          </div>
            <div className="input__container">
              <label htmlFor="document">Número de documento</label>
              <input id='document' name='document_number' type="number" value={employee.document_number || ""} onChange={updateFields} />
            </div>
            <div className="input__container">
              <label htmlFor="names">Nombres</label>
              <input id='names' type="text" name='first_name' value={employee.first_name || ""} onChange={updateFields} />
            </div>
            <div className="input__container">
              <label htmlFor="lastName">Apellidos</label>
              <input id='lastName' type="text" name='last_name' value={employee.last_name || ""} onChange={updateFields}/>
            </div>
            <div className="input__container">
              <label htmlFor="dob">Fecha de nacimiento</label>
              <input id='dob' type="date" name='dob' value={employee.dob || ""} onChange={updateFields} />
            </div>
            <div className="input__container">
              <label htmlFor="ocupation">Profesión</label>
              <input id='ocupation' type="text" name='profession' value={employee.profession || ""}  onChange={updateFields} />
            </div>
            <div className="input__container">
              <label htmlFor="salary">Aspiración Salarial</label>
              <input id='salary' type="number" name='salary' value={employee.salary || ""} onChange={updateFields} />
            </div>
            <div className="input__container">
              <label htmlFor="email">E-mail</label>
              <input id='email' type="email" name='email' value={employee.email || ""} onChange={updateFields} />
            </div>
            <div className="button__container">
            <button onClick={createEmployee} className='generic-button'>Crear Perfil</button>
            </div>
        </form>
      </section>
    </main>
    </>
  )
}

export default RegistroCiudadanos