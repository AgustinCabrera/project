import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../../assets/data'
import './ItemDetailContainer.css'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
    const { itemId } = useParams()
  
    useEffect(() => {
    getProductsById(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.log(error)
        })
}, [itemId])

  return (
    <div className='itemDetailContainer'>
        <ItemDetail {...product}   />
    </div>
  )
}

