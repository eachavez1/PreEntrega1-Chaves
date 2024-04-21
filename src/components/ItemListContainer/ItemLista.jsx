import React from 'react'
import Item from './Item'

const ItemLista = ({products}) => {
  return (
    <div>
        {
            products.map((product)=>{
            return <Item key={product.id} product={product} />
            })
        }
    </div>
  )
}

export default ItemLista