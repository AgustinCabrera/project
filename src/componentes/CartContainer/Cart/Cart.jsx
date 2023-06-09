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
                <Link to = '/' className ='button-home'>Go to home</Link>
            </div>
        )
    }

  return (
    <div>
        <h2 className='cart-title'>Your cart</h2>
            <div className='cart-style'>
                <div className='cart-items-style horizontal-cart'>
                <div className='cartItemList'>
                  {
                    cart.map((item) =>(
                        <CartItem key={item.id} item={item}/>)
                    )                        
                  }
                </div>
                <h3 className='cart-title'>Total: ${totalPrice}</h3>
                </div>
        </div>
        <div className='buttons-styles'>
            <div className='button-cart' onClick={ clearCart}>Clear cart</div>
            <Link to = '/checkout' className ='button-cart' style={{ textDecoration: 'none' }} >Checkout </Link>
        </div>

    </div>
  )
}
export default Cart;
