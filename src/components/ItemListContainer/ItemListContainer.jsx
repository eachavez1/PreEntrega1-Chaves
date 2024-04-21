import React, { useEffect } from 'react'
import { useState } from 'react'
import getProducts from '../../data/getProducts'
import ItemLista from './ItemLista'





const ItemListContainer = ({saludo}) => {
  const [products, setProducts]=useState([])

  useEffect(()=>{
    getProducts
    .then ((respuesta)=>setProducts(respuesta))
    .catch ((error)=> console.log(error))
    .finally (()=>console.log("Finalizó la promesa"))
  }, [])



  return (
    <div>
        <h1>{saludo}</h1>
      <ItemLista products={products}/>
    </div>
  )
}

export default ItemListContainer