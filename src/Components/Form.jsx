import { useState } from 'react'
import Enviado from './Enviado'

const Form = () => {
    const [usuario, setUsuario] = useState({
        nombre: '', 
        email: ''
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const isValidEmail = (email) => {
      // Expresión regular para validar formato de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        if(usuario.nombre.length > 5 && isValidEmail(usuario.email)){
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }
    console.log(usuario)
  return (
    <div>
        {!show && 
            <form onSubmit={handleSubmit}>
                <label >Nombre</label>
                <input type="text" value={usuario.nombre} onChange={(event) => setUsuario({...usuario, nombre: event.target.value.trimStart()})}/>
                <label >Email</label>
                <input type="text" value={usuario.email} onChange={(event) => setUsuario({...usuario, email: event.target.value.trimStart()})}/>
                <button>Enviar</button>
            </form>
        }
        {show ? 
            <Enviado nombre={usuario.nombre} email={usuario.email}/>
        :
            null
        }
        {error && <h5 style={{color: 'red'}}>Por favor verifique su información nuevamente</h5>}

    </div>
  )
}

export default Form;