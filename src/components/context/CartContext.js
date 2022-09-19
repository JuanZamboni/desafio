import React from 'react'
import { createContext } from 'react';
import Swal from 'sweetalert2';
import { useState } from 'react';

const CartContext = () => {

}

export default CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart ([...cart, item])
      }

      const removeItem = (id) => {
      setCart ( cart.filter((item) => item.id !== id))
      }




      const isInCart = (id) => {
        return cart.find((item) => item.id === id)
      }

      const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
      }

      const emptyCart = () => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Esta accion no es reversible!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'si, borrar!'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
              
            }
          })
        

      }

      return (
        <CartContext.Provider value={ {
            cart,
            addToCart,
            isInCart,
            cartTotal,
            emptyCart,
            removeItem
          } }>

         {children}

        </CartContext.Provider>
      )
}