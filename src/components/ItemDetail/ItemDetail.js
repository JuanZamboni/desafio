import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div className="container">

                    <img src={item.imagen} alt="productos"/>
                    <h4>{item.nombre}</h4>
                    <p> {item.precio}</p>
                    <p> {item.stock}</p>
                    <p>{item.descripcion}</p>
                  


    </div>
  )
}

export default ItemDetail