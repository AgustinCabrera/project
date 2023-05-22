import { useContext, useState } from 'react'
import { CartContext } from '../../assets/context/CartContext'
import { Timestamp, writeBatch, collection, query, where, getDocs, documentId,addDoc } from '@firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'
import CheckoutForm from './CheckoutForm'
import './CheckoutForm.css'
import './Checkout.css'


 const Checkout = () => {
    const [loading,setLoading] = useState(false)
    const [orderId,setOrderId] = useState('')

    const {cart,total,clearCart} = useContext(CartContext)

    const createOrder = async ({name,phone,surname,email}) =>{
        setLoading(true)

        try{
            const objOrder = {
                buyer:{
                    name,surname,phone,email
                },
                items:cart,
                total:total,
                date:Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db,'items')
            

            const itemsAddedFromFirestore = await getDocs(query(productsRef,where(documentId(),'in',ids)))

            const {docs} = itemsAddedFromFirestore

            docs.forEach(doc => {

                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(item => item.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref,{stock: stockDb-prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })
        

            if(outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection(db,'orders')
                const orderAdded= await addDoc(orderRef,objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } 
            else{
                console.error('Products out of stock')
            }

    }
    catch(error){
        console.log(error)
    } finally {
        setLoading(false)
    }
    
    }
    return(
        <div>
           <h1 className='title'>Checkout</h1>
           {orderId ? (
            <h2>The ID of your order is: {orderId}</h2>
        ) : (
            <CheckoutForm createOrder={createOrder} setOrderId={setOrderId} />
      )}
        </div>
    )
}
export default Checkout

