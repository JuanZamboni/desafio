 import React from 'react'
 import { useState, useEffect } from 'react'

const ItemCount = () => {

   const [counter, setCounter] = useState(1)
   const [saludar, setSaludar] = useState(true)
  


    const handleSumar = () => {
      setCounter(counter + 1)
      console.log(counter)
    }

    const handleRestar = () => {
      if (counter > 1) {
      setCounter(counter - 1)
      console.log(counter)
    }

  }

 const handleSaludar = () => {
 setSaludar(!saludar)
  // if (saludar){
   // setSaludar(false)
  // } else {
   //setSaludar(true)
 //}
 
}

//useEffect( () => {
  //console.log("Contador Montado!")
  // return () => {
   // console.log("Contador desmontado!")
  // }
 // }, [])

  //useEffect( () => {
  
  //if (counter % 2 === 0) {
   // console.log(counter)
 // }
 // },[counter])


  return (

    <div className='container my-5'>

      <h2>Stock disponible</h2>

      <hr/>
        
        <button onClick={handleRestar} className="btn btn-primary">-</button>
        <span className="mx-2">{counter}</span>
        <button onClick={handleSumar} className="btn btn-primary">+</button>
        <p>Ultimo click:{new Date().toLocaleString()}</p>
         <hr/>
         <button
          onClick={handleSaludar} 
          className={saludar ? "btn btn-success" : "btn btn-info"}>
          
          {saludar ? "Agregar" : "Agregado"}
          </button>
    </div>
  )
}
export default ItemCount