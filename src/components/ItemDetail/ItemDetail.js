import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext, CartContext} from 'react'

const ItemDetail = ({item}) => {

  const {cart, addToCart, isInCart} =useContext(CartContext)
  
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