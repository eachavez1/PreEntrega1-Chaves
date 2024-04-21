
import './App.css'
import ItemCount from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Nav from './components/Nav/Nav'

function App() {

  const addToCart = (count) => {
    console.log (count);
  };

  return (
    <div>
      <Nav/>
      <ItemListContainer saludo="Bienvenido a la Tienda Virtual de Apple!"/>
      <ItemCount addToCart={addToCart}/>
    </div>
  )
}

export default App
