import { createContext, useState } from "react";
import { CartItem } from "../../componentes/CartContainer/CartContainer";
export const CartContext = createContext({
    cart:[]
})
export const CartProvider = ({ children }) => {

    const [cart,setCart] = useState([])


    const addItem = (item,count) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev,{...item,count}])
        } else {
            console.error('Product added before')
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

    const totalPrice = () => {
        return cart
        .reduce((acc,prod) => acc + prod.price * prod.count,0)
        .toFixed(2);
    }

    return (
        <CartContext.Provider value = {[cart,setCart,addItem,removeItem,clearCart,totalPrice]}>
            {children}
        </CartContext.Provider>

    )

}