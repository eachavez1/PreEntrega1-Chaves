import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import "./Cart.css"

const Cart = () => {

    const {cart, clearCart, deleteProductById, totalPrice} = useContext(CartContext)

  return (
    <div className="Contenedor_padre">
        <h2>Productos en el carrito</h2>
        {
            cart.map((product)=>(
                <div className="informacion_productos" key={product.id}>
                    <p>{product.nombre}</p>
                    <img src={product.imagen} style={{width:"60px", height:"70px"}}></img>
                    <p>Cantidad: {product.quantity}</p>
                    <p>Precio por unidad: {product.precio}</p>
                    <p>Total: {product.precio*product.quantity}</p>
                    <button onClick={()=> deleteProductById(product.id)} className="eliminar_producto">Eliminar producto</button>
                </div>

            ))
        }
        <h2>Total de la compra: {totalPrice()}</h2>
        <button className="vaciar_boton" onClick={clearCart}>Vaciar carrito</button>


    </div>
  )
}

export default Cart