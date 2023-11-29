import React from 'react'

const Enviado = ({nombre, email}) => {
  return (
    <div>
        <h3>Gracias, {nombre}!</h3>
        <h4>, te contactaremos cuando antes vía mail{email}💖</h4>
    </div>
  )
}

export default Enviado;