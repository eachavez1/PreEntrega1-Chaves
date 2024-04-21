import React from 'react'

const Item = ({product}) => {
  return (
    <div key={product.id} className="card">
        <div className="image-box-card">
            <img className="image-card" src={product.imagen} alt={product.nombre} />
        </div>
        <div className="info-card">
            <h2 className="title-card">{product.nombre}</h2>
            <p className="description-card">{product.descripcion}</p>
            <p className="price-card">{product.precio}</p>
        </div>

    </div>
  )
}

export default Item