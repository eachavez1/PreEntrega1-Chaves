
import './App.css'
import Nav from './components/Nav/Nav'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EjemploFormulario from './components/examples/EjemploFormulario';
import { CartProvider } from './context/CartContext';

function App() {

  const addToCart = (count) => {
    console.log (count);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <Nav/>
        <Routes>
          <Route path="/" element={<ItemListContainer saludo="Bienvenido a la tienda en linea de Apple"/>} />
          <Route path="/PreEntrega1-Chaves" element={<ItemListContainer saludo="Bienvenido a la tienda en linea de Apple"/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer saludo="Bienvenido a la tienda en linea de Apple"/>} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}/>
          <Route path="/example" element={<EjemploFormulario/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
