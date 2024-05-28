import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import "./nav.css"
import { Link } from 'react-router-dom'

const CartWidget = () => {

  const {totalQuantity}= useContext(CartContext)

  return (
    <Link to="/cart" className='carrito_y_numero'>
        <img className='cart' src='imagenes/carrito.png'/>
        <p>{totalQuantity()}</p>
    </Link>
    

  )
}

export default CartWidget