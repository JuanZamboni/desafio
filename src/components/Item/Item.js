import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"

const Item = ( {producto} ) => {
  return (
         <div className="ctn-producto my-5">

                    <img src={producto.imagen} alt="Imagen-Productos"/>
                    <div className="info-produ">
                    <h4 className='produ-nombre'>{producto.nombre}</h4>
                    <p className="p-produ">Precio: {producto.precio}</p>                    
                    <p className="p-produ">Stock disponible: {producto.stock}</p>
                    <p className="p-produ">{producto.descripcion}</p>
                    <Link to={`/item/${producto.id}`} className="btn btn-primary my-2">Ver más</Link>

                    </div>

             </div>
  )
}

export default Item