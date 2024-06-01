import React from 'react'
import { useState } from 'react'
import "./itemCount.css"

const ItemCount = ({handleClick, stock}) => {
    const [count, setCount] = useState(1);

    const sumar = () => {
        if(count<stock) {
            setCount(count+1)
        }

    };

    const restar = () => {
        if (count>1) {
        setCount(count-1)
        };
    };


  return (
    <div>
        <div className="suma_y_resta">
            <button className="boton" onClick={restar}>-</button>
            <p>{count}</p>
            <button className="boton" onClick={sumar}>+</button>
        </div>
        <div>
            <button className="agregar_carrito" onClick={()=> handleClick(count)}>Agregar al carrito</button>
        </div>

    </div>
    

  )
}

export default ItemCount