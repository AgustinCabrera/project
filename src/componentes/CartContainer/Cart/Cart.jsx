import React from 'react'
import { CartContext } from '../../../assets/context/CartContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartItem } from '../CartItem/CartItem'
import './Cart.css'


export const Cart = () => {
    const {cart, clearCart,totalQuantity, calculateTotalPrice} = useContext(CartContext)

    const totalPrice = calculateTotalPrice(cart);


    if(cart.length === 0){
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
            <div className='cart-style'>
                <div className='cart-items-style horizontal-cart'>
                <div className='cartItemList'>
                  <CartItem />
                </div>
                <h3 className='cart-title'>Total: ${totalPrice}</h3>
                <button className='button-cart' onClick={clearCart}>Clear cart</button>
                <Link to = '/checkout' className ='option' style={{ textDecoration: 'none' }} >Checkout </Link>
                </div>
        </div>

    </div>
  )
}
export default Cart;
