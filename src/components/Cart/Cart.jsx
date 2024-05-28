import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {

    const {cart, clearCart} = useContext(CartContext)

  return (
    <div>
        {
            cart.map((product)=>(
                <div key={product.id}>
                    <p>{product.nombre}</p>
                    <img src={product.imagen} style={{width:"120px", height:"140px"}}></img>
                </div>

            ))
        }

        <button onClick={clearCart}>Vaciar carrito</button>


    </div>
  )
}

export default Cart