import React from 'react'
import { Icon } from '@iconify/react';
import {Link} from 'react-router-dom'

const CartWidget = () => {

 

  return (
    <Link to="/cart">
    <Icon icon="el:shopping-cart" />
   
    </Link>
  )
}

export default CartWidget

