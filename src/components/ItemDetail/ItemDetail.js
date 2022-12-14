import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {useState, useContext} from 'react'
import {CartContext} from '../context/CartContext'
import {Link} from 'react-router-dom'


const ItemDetail = ({item}) => {

  const {addToCart, isInCart} = useContext(CartContext)
  
  const [cantidad, setCantidad] = useState(1)

  const handleAgregar = () => {
    const itemToCart = {
      id: item.id,
      precio: item.precio,
      nombre: item.nombre,
      cantidad

    }
  
  addToCart(itemToCart)
  }


  return (
    <div className="container">

                    <img src={item.imagen} alt="productos"/>
                    <h4>{item.nombre}</h4>
                    <p> {item.precio}</p>
                    <p> {item.stock}</p>
                    <p>{item.descripcion}</p>
                  
{
  isInCart(item.id)
  ?   <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
  :   <ItemCount
       max={item.stock}
       counter={cantidad}
       setCounter={setCantidad}
       handleAgregar={handleAgregar}
 />

}
               
    </div>
  )
}

export default ItemDetail