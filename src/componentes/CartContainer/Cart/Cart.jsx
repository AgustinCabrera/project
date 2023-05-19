import React from 'react'
import { CartContext } from '../../../assets/context/CartContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartItem } from '../CartItem/CartItem'
import './Cart.css'

export const Cart = () => {
    const {cart, clearCart,totalQuantity,total} = useContext(CartContext)

    if(totalQuantity === 0){
        return(
            <div className='cart-container'>
                <h2 className='cart-title'>Your cart is empty</h2>
                <Link to = '/' className ='option'>Go to home</Link>
            </div>
        )
    }

  return (
    <div>
        <h2 className='cart-title'>Your cart</h2>
            <div className='cart-container'>
                <div className='cart-items'>
                {
                    cart.map(item => (
                        <CartItem key={item.id} {...item}/>)
                    )
                }
                <h3>Total: ${total}</h3>
                <button className='button-container' onClick={clearCart}>Clear cart</button>
                <Link to = '/checkout' className ='option'>Finish buying</Link>
                </div>
        </div>

    </div>
  )
}
export default Cart;
