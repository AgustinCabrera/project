import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../assets/context/CartContext'
import { Link } from 'react-router-dom'
import { Badge } from 'react-bootstrap' 

export const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

  return (
    <Link to = '/cart' className ='CarWidget' >
        <div class="icon-container">
           <svg xmlns="http://www.w3.org/2000/svg" 
           width="32" 
           height="32" 
           fill="currentColor" 
           class="bi bi-bag" 
           viewBox="0 0 16 16" 
           color='white' >
            
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
       
        </svg>
        <Badge bg="secondary" className="cart-badge">
          {totalQuantity()}
        </Badge>
        </div>
        
    </Link>
  )
}
export default CartWidget;
