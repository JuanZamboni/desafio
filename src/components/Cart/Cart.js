
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import {BsFillTrashFill} from 'react-icons/bs'

const Cart = () => {

  const {cart, cartTotal, emptyCart, removeItem} = useContext(CartContext)



  return ( 

    <div className='container my-2'>
      
      {
        cart.leght === 0 
        ? <>
            <h2>Tu carrito está vacío</h2>
             <Link to="/" className="btn btn-primary">Ir a comprar</Link>
        </>

        : <>  <h2>Carrito</h2>
             { cart.map((item) => (
              <div key={item.id}>
               <h4>{item.nombre}</h4>
                    <p>Precio: {item.precio}</p>
                    <p>Cantidad: {item.cantidad}</p>
                     <button onClick={() => removeItem(item.id)} className='btn btn-danger mx-2'><BsFillTrashFill/></button>
                    <hr/>
                   </div>
        ))}
 
             <h4>Total: ${cartTotal()}</h4>
             <button onClick={emptyCart}  className='btn btn-danger'>Vaciar carrito</button>
        </>
       }
    </div>

  )
}

export default Cart