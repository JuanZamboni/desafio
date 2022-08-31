import React from 'react'

const Saludo = (props) => {
    console.log(props.cliente)
  return (
    <div>Bienvenido {props.cliente}</div>
  )
}

export default Saludo