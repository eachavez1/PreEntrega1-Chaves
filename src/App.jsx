
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Nav from './components/Nav/Nav'

function App() {


  return (
    <div>
      <Nav/>
      <ItemListContainer saludo="Bienvenido a la Tienda Virtual de Apple!" nombre="CEO: Andres Chaves"/>
    </div>
  )
}

export default App
