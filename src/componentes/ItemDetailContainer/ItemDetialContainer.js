import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './ItemDetailContainer.css'
import { ItemDetail } from '../ItemDetail/ItemDetail' 
import {getDoc,doc} from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'
import { Loader } from "../Loader/Loader"

export const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null)
  const [loading,setLoading] = useState(true)
  
  const { itemId } = useParams()
  
  useEffect( () => {
    setLoading(true)

    const docRef = doc(db,'items',itemId)
    
    getDoc(docRef)
      .then(response => {
        const data = response.data()
        const productsAdapted = {id: response.id,...data}
        setProduct(productsAdapted)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })

  },[itemId])
  
  return (
    <div className='itemDetailContainer'>
        {loading ? (
        <Loader />
      ) : (
        product && <ItemDetail {...product} />
      )}
    </div>
  )
}

