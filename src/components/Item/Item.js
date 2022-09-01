import React from 'react'

const Item = ( {producto} ) => {
  return (
         <div>
                    <img src={producto.imagen}/>
                    <h4>{producto.nombre}</h4>
                    <p>Precio: {producto.precio}</p>
                    <p>Stock disponible: {producto.stock}</p>
                    <p>{producto.descripcion}</p>
                    <a className="btn btn-primary my-2">Ver más</a>
             </div>
  )
}

export default Item