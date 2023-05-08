import  { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsByCategory, getProducts } from '../../assets/data'
import  ItemList  from '../ItemList/ItemList'

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
      <ItemList products={products} />
    </div>
  )
}
export default ItemListContainer
