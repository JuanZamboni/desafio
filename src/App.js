
import { Navbar } from './components/Navbar/Navbar'
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

const App = () => {
  return (
    <div>
    <Navbar/>
    <CartWidget/>
    <ItemListContainer cliente="cliente"/>
    </div>
  );
}

export default App;
