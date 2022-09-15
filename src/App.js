
import { Navbar } from './components/Navbar/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
const App = () => {


  return (

    

    <div>


    <BrowserRouter>

     <Navbar/>
 
      <Routes>
       <Route path='/' element={<ItemListContainer/>}/>

       <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
       <Route path='/Item/:itemId' element={<ItemDetailContainer/>}/>
       
      </Routes>

    


        
       <Footer/>

    </BrowserRouter>

   
 
    </div>
  
  );
}

export default App;
