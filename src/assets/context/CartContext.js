import { createContext, useState } from "react";
import { CartItem } from "../../componentes/CartContainer/CartContainer";
import { Link } from "react-router-dom";
export const CartContext = createContext({
    cart:[],
    total:0,
})
export const CartProvider = ({ children }) => {

    const [cart,setCart] = useState([])


    const addItem = (item,count) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev,{...item,count}])
        } else {
            const updatedCart = cart.map((prod) =>
              prod.id === item.id ? { ...prod, count: prod.count + count } : prod
            );
            setCart(updatedCart);
          }
    }

    const removeItem = (itemId) => {
        const cartUpdated  = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

     const calculateTotalPrice = (cart) => {
        return cart
        .reduce((acc,prod) => acc + prod.price * prod.count,0)
        .toFixed(2);
    }

    const total = calculateTotalPrice(cart);
    return (
        <CartContext.Provider value = {{cart,setCart,addItem,removeItem,clearCart,calculateTotalPrice,total}}>
            {children}
        </CartContext.Provider>

    )
}