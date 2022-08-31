 import React from 'react'
 import { useState } from 'react'

const ItemCount = () => {

   const [counter, setCounter] = useState(0)
   const [saludar, setSaludar] = useState(true)
  


    const handleSumar = () => {
      setCounter(counter + 1)
      console.log(counter)
    }

    const handleRestar = () => {
      if (counter > 0) {
      setCounter(counter - 1)
      console.log(counter)
    }

  }

 const handleSaludar = () => {
  if (saludar){
    setSaludar(false)
  } else {
   setSaludar(true)
 }
 
}
  return (

    <div className='container my-5'>

      <h2>Contador</h2>

      <hr/>
        
        <button onClick={handleRestar} className="btn btn-primary">-</button>
        <span className="mx-2">{counter}</span>
        <button onClick={handleSumar} className="btn btn-primary">+</button>

         <hr/>
         <button onClick={handleSaludar} className="btn btn-primary">{saludar ? "Hola!" : "Chau!"}</button>
    </div>
  )
}
export default ItemCount