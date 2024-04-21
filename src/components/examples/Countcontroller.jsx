import React from 'react'
import { useState } from 'react'
import Count from './Count';

const Countcontroller = () => {

    const [contador, setContador] = useState(1)

    const sumar = () => {
        setContador(contador + 1)
        console.log("Clickeamos el contador de sumar", contador)
    };

    const borrar = () => {
        setContador(1)
    };

  return (
    <Count contador={contador} sumar={sumar} borrar={borrar} />
  );
};

export default Countcontroller