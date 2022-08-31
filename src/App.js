
import { Navbar } from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'
import './App.css';

const App = () => {
  return (
    <div>
    <Navbar/>
    <ItemListContainer cliente="cliente"/>
    <ItemCount/>
    </div>
  );
}

export default App;
