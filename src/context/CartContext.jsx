import { createContext, useState } from 'react'

// se crea un contexto de rect
const CartContext =createContext()

const CartProvider = ({children}) => {

    const[cart, setCart] = useState([])

    const addToCart = (newProduct) => {
        setCart([...cart, newProduct])
    }

    const totalQuantity = () => {
        const quantity = cart.reduce((total, product) => total + product.quantity, 0)
        return quantity
    }

    const clearCart = () => {
        setCart([])
    }


    return (
        <CartContext.Provider value={{cart, addToCart, totalQuantity, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}