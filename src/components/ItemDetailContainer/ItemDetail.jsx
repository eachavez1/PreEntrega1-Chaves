import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./ItemDetail.css"


const ItemDetail = ({product}) => {

  const {cart, addToCart} = useContext(CartContext)
  const [clickAdd, setClickAdd] = useState(false)
  
  console.log(cart)

  const handleClick =(count) => {
    
    const productCart={...product, quantity:count}
    addToCart(productCart)
    setClickAdd(true)
  }

  return (
    <div>
        <h1 className="titulo_detalle">{product.nombre}</h1>
        <img className="imagen_detalle" src={product.imagen}></img>
        <p>{product.descripcion}</p>
        <p className="precio">{product.precio}</p>
        {
          clickAdd ? <Link className="boton_ir_al_carrito" to="/cart">Ir al carrito</Link> : <ItemCount handleClick={handleClick} stock={product.stock}/>
        }
        <p className="garantia_texto">IMPORTANTE: La garantía limitada de Apple cubre el iPhone y los accesorios de marca Apple que vienen en la caja con el producto ante problemas de fabricación durante un año a partir de la fecha de compra. Los accesorios de marca Apple comprados aparte están cubiertos por la garantía limitada de Apple para accesorios.</p>

    </div>
  )
}

export default ItemDetail