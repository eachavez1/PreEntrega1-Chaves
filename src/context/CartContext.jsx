import { createContext, useState } from 'react'

// se crea un contexto de rect
const CartContext =createContext()

const CartProvider = ({children}) => {

    const[cart, setCart] = useState([])

    const addToCart = (newProduct) => {
        setCart([...cart, newProduct])
    }


    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}