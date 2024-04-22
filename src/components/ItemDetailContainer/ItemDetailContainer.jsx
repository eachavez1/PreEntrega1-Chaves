import React from 'react'
import { useState, useEffect } from 'react'
import getProducts from "../../data/getProducts"
import ItemDetail from './ItemDetail'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct]=useState({})

    useEffect (()=>{
        getProducts
            .then((respuesta)=>{
                const newProduct =respuesta.find((product)=>product.id==="ASC001")
                setProduct (newProduct)
            })

            .catch((error)=> console.log(error))

    },[])

  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer