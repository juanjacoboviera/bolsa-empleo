import React, {useState, useEffect} from 'react'
import Nav from '../../components/nav/Nav'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import './registroCiudadano.css'

const RegistroCiudadanos = () => {
  
  const [employee, setEmployee ] = useState({});
  const [documentTypes, setDocumentTypes] = useState([]);
  const params = useParams();
  const { id } = params;
  const [editCandidate, setEditCandidate] = useState(id);
  const navigate = useNavigate()
  const isDisabled = editCandidate ? true : false
  
  useEffect(()=>{
    if(editCandidate){
      const url = 'http://mesopotamico.com/proyectos/bolsa-empleo/';
      const data = {
        action: 'get',
        table: 'job_offers',
      }
      fetch(url+'?action=get&table=candidates')
      .then(data=> data.json())
      .then(results =>{
        const correctCandidate = results.find(candidate => candidate.id == editCandidate)
        setEmployee(correctCandidate)
      })
    }

    const url = 'http://mesopotamico.com/proyectos/bolsa-empleo/';
    const data = {
      action: 'get',
      table: 'job_offers',
    }
    fetch(url+'?action=get&table=document_type')
    .then(data=> data.json())
    .then(results => setDocumentTypes(results))
    
  }, [])
 

  const updateFields = (evt) => {
    evt.preventDefault()
    setEmployee({...employee, [evt.target.name]: evt.target.value});
  }

  const createEmployee = (evt) =>{
    evt.preventDefault()
    const url = 'http://mesopotamico.com/proyectos/bolsa-empleo/';
    let fields = []
    let values = []
    for(let field in employee){
      fields.push(field);
      values.push(employee[field])
    }
    fields = fields.join(',')
    values = values.join(',')

    if(editCandidate){
      fetch(url+`?action=update&table=candidates&fields=${fields}&values=${values}`)
      .then(data=> data.json())
      .then(results => navigate("/editar-perfiles/"+ results.id))
      swal("Usuario editado!", "El usuario se ha editado de manera exitosa!", "success");
    }else{
      fetch(url+`?action=save&table=candidates&fields=${fields}&values=${values}`)
      .then(data=> data.json())
      .then(results => navigate("/editar-perfiles/"+ results.id))
      swal("Usuario Creado!", "El usuario se ha registrado de manera exitosa!", "success");
    }

    setEmployee({})
  }

  return (
    <>
    <header>
      <Nav></Nav>
    </header>
    <main>
      <section className='container --form-modification'>
        <div className="form__description">
          <h1 className='form__title'>{editCandidate ? "Editar Perfil" : "Registrar Perfil"}</h1>
          <p>{editCandidate ? "" : "Registra el perfil del candidato para acceder a los beneficios de la bolsa de empleo."}</p>
        </div>
        <form className='form__registration' action="submit">
          <div className="input__container">
              <label htmlFor="idType">Tipo de Documento</label>
              <select required name="document_type" id="idType" disabled={isDisabled} value={employee.document_type} onChange={updateFields}>
                <option value="">Selecciona un tipo</option> 
              {documentTypes.map(type =>  <option key={type.id} value={type.id} >{type.type_name}</option> )}
            </select>
          </div>
            <div className="input__container">
              <label htmlFor="document">Número de documento</label>
              <input required id='document' name='document_number' disabled={isDisabled} type="number" value={employee.document_number || ""} onChange={updateFields} />
            </div>
            <div className="input__container">
              <label htmlFor="names">Nombres</label>
              <input required id='names' type="text" name='first_name' value={employee.first_name || ""} onChange={updateFields} />
            </div>
            <div className="input__container">
              <label htmlFor="lastName">Apellidos</label>
              <input required id='lastName' type="text" name='last_name' value={employee.last_name || ""} onChange={updateFields}/>
            </div>
            <div className="input__container">
              <label htmlFor="dob">Fecha de nacimiento</label>
              <input required id='dob' type="date" name='dob' value={employee.dob || ""} onChange={updateFields} />
            </div>
            <div className="input__container">
              <label htmlFor="ocupation">Profesión</label>
              <input required id='ocupation' type="text" name='profession' value={employee.profession || ""}  onChange={updateFields} />
            </div>
            <div className="input__container">
              <label htmlFor="salary">Aspiración Salarial</label>
              <input required id='salary' type="number" name='salary' value={employee.salary || ""} onChange={updateFields} />
            </div>
            <div className="input__container">
              <label htmlFor="email">E-mail</label>
              <input required id='email' type="email" name='email' value={employee.email || ""} onChange={updateFields} />
            </div>
            <div className="button__container">
            <button action='submit' onClick={createEmployee} className='generic-button'>{editCandidate ? "Editar Perfil" : "Crear Perfil"}</button>
            </div>
        </form>
      </section>
    </main>
    </>
  )
}

export default RegistroCiudadanos