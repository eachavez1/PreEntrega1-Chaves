import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Item = ({product}) => {

  const [expandir, setExpandir] = useState(false)

  const handleMouseOver = () => {
    setExpandir(true)
  };

  const handleMouseLeave = () => {
    setExpandir(false)
  };

  const estiloCard = {

    transform:expandir ? "scale(0.9)" : "scale(1)",
    transition: "transform 0.4s ease-in-out"
  }


  return (
    <div key={product.id} 
    style={estiloCard}
    className="card" 
    onMouseOver={handleMouseOver} 
    onMouseLeave={handleMouseLeave}>
        <div className="image-box-card">
            <img className="image-card" src={product.imagen} alt={product.nombre} />
        </div>
        <div className="info-card">
            <h2 className="title-card">{product.nombre}</h2>
            <p className="description-card">{product.descripcion}</p>
            <p className="price-card">{product.precio}</p>
            <Link to={"/detail/"+product.id}>Ver detalles</Link>
        </div>

    </div>
  )
}

export default Item