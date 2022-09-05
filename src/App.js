
import { Navbar } from './components/Navbar/Navbar';
import Saludo from './components/Saludo/Saludo';
import ItemCount from './components/ItemCount/ItemCount';
import { useState } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {


   const [show, setShow] = useState(true)

   const handleShow = () => {
    setShow(!show)
   }



  return (

    <div>

    <Navbar/>
    <Saludo cliente="cliente"/>

    <ItemDetailContainer id={1}/>

    <ItemListContainer/>

    <button className="btn btn-primary" onClick={handleShow}>Ver Stock</button>

    {
    show ? <ItemCount/> : null
    }

    </div>
  );
}

export default App;
