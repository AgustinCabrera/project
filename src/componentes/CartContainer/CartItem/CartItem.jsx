import React, { useContext } from 'react'
import { CartContext } from '../../../assets/context/CartContext'
import Item from '../../item/Item';
import { ItemCount } from '../../ItemCount/ItemCount';

export const CartItem = () => {
    const {cart} = useContext(CartContext);
return(
    <div>
        {cart.map((product) =>(
        <div
            key = {product.id+"OnCart"}
            className='CartItemListContainer'>
            <Item
            id = {product.id}
            img = {product.img}
            name = {product.name}
            quantity = {product.quantity}
            price = {product.price * product.quantity}/>  
        </div>
        ))}
    </div>
    )
}
export default CartItem;