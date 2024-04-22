
import './App.css'
import Nav from './components/Nav/Nav'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const addToCart = (count) => {
    console.log (count);
  };

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<ItemListContainer saludo="Bienvenido a la tienda en linea de Apple"/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
