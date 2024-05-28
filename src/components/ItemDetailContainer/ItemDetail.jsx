import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({product}) => {

  const {cart, addToCart} = useContext(CartContext)
  
  console.log(cart)

  const handleClick =(count) => {
    const productCart={...product, quantity:count}
    addToCart(productCart)
  }

  return (
    <div>
        <h1 className="titulo_detalle">{product.nombre}</h1>
        <img className="imagen_detalle" src={product.imagen}></img>
        <p>{product.descripcion}</p>
        <p>{product.precio}</p>
        <p className="garantia_texto">IMPORTANTE: La garantía limitada de Apple cubre el iPhone y los accesorios de marca Apple que vienen en la caja con el producto ante problemas de fabricación durante un año a partir de la fecha de compra. Los accesorios de marca Apple comprados aparte están cubiertos por la garantía limitada de Apple para accesorios.</p>
        <ItemCount handleClick={handleClick} stock={product.stock}/>
    </div>
  )
}

export default ItemDetail