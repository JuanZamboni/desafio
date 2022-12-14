
import React from 'react';
import Item from "../Item/Item";



const ItemList = ( {productos = []} ) => {
  return (
    <div className="container my-4">

      <h2>Productos</h2>

         <hr/>
 
        { productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
    
    </div>
  )
}

export default ItemList