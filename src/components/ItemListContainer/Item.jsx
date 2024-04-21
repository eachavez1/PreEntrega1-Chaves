import React from 'react'

const Item = ({product}) => {
  return (
    <div key={product.id} className="card">
        <h2>{product.nombre}</h2>
        <p>{product.descripcion}</p>
    </div>
  )
}

export default Item