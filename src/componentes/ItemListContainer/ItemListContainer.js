import  { useState, useEffect } from 'react'
import { getProducts } from '../assets/data'
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from '../assets/data'
import {ItemList} from './ItemList'

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])

  const {categoryId} = useParams()

  useEffect(() => {
    const asynFunc = categoryId ? getProductsByCategory : getProducts

    asynFunc(categoryId)
      .then(response => {
        setProducts(response)
        })

     .catch (error => {
       console.log(error)
     })  
    },[categoryId])


  return (
    <div className='itemListContainer'>
      <p className='greeting'>{greeting}</p>
      {products.map((prod) => (
        <Item id={prod.id} name={prod.name} price={prod.price} stock={prod.stock} img={prod.img} detail={prod.detail} categoryId={prod.categoryId}/>))}
    </div>
  )
}
export default ItemListContainer
