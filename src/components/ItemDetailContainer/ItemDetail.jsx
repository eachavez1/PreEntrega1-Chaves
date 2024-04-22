import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <div>
        <h1 className="titulo_detalle">{product.nombre}</h1>
        <img className="imagen_detalle" src={product.imagen}/>
        <p>{product.descripcion}</p>
        <p>{product.precio}</p>
        <p className="garantia_texto">IMPORTANTE: La garantía limitada de Apple cubre el iPhone y los accesorios de marca Apple que vienen en la caja con el producto ante problemas de fabricación durante un año a partir de la fecha de compra. Los accesorios de marca Apple comprados aparte están cubiertos por la garantía limitada de Apple para accesorios.</p>
    </div>
  )
}

export default ItemDetail