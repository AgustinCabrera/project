import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../../assets/context/CartContext'
import { Trash } from '../../Trash/Trash'

export const CartItem = ({item}) => {
    const {removeItem} = useContext(CartContext) 

return(
    <div className='card-cart'>
        <div className='card-cart-img'>
            <img src={item.img} alt={item.title} className='img-cart'/>
            </div>
            <div className='card-cart-body'>
                <h5 className='card-cart-title'>{item.name}</h5>
                <p className='card-cart-text'>Price: ${item.price}</p>
                <p className='card-cart-text'>Quantity: {item.quantity}</p>
                <button className='button-cart' onClick={removeItem}> <Trash /></button>
            </div>
        
    </div>
    )
}
export default CartItem;