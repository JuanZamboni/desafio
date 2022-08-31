import React from 'react'

const ItemListContainer = (props) => {
    console.log(props.cliente)
  return (
    <div>Bienvenido {props.cliente}</div>
  )
}

export default ItemListContainer