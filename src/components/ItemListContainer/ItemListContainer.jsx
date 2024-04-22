import React, { useEffect } from 'react'
import { useState } from 'react'
import getProducts from '../../data/getProducts'
import ItemLista from './ItemLista'
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"





const ItemListContainer = ({saludo}) => {
  const [products, setProducts]=useState([])

  const {idCategory} = useParams()

  useEffect(()=>{
    getProducts
    .then ((respuesta)=>{
      if (idCategory){
        const newProducts = respuesta.filter((producto)=>producto.categoria===idCategory)
        setProducts(newProducts)
      } else {
        setProducts(respuesta)
      }
    })
    .catch ((error)=> console.log(error))
    .finally (()=>console.log("Finalizó la promesa"))
  }, [idCategory])



  return (
    <div className="Contenedor_padre">
        <h1>{saludo}</h1>
      <ItemLista products={products}/>
    </div>
  )
}

export default ItemListContainer