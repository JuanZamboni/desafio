
import { Navbar } from './components/Navbar/Navbar';
//import Saludo from './components/Saludo/Saludo';
import ItemCount from './components/ItemCount/ItemCount';
import { useState } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
const App = () => {


   const [show, setShow] = useState(true)

   const handleShow = () => {
    setShow(!show)
   }



  return (

    

    <div>


    <BrowserRouter>

     <Navbar/>
 
      <Routes>
       <Route path='/' element={<ItemListContainer/>}/>

       <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
       <Route path='/Item/:itemId' element={<ItemDetailContainer/>}/>
       
      </Routes>

        {
          show ? <ItemCount/> : null
         }


        
       <Footer/>

    </BrowserRouter>

   
 
    </div>
  
  );
}

export default App;
