import React from 'react'

const ItemListContainer = ({saludo, nombre}) => {

  return (
    <div>
        <h1>{saludo}</h1>
        <h1>{nombre}</h1>
    </div>
  )
}

export default ItemListContainer