import { createContext, useState } from "react";
export const CartContext = createContext({
    cart:[],
    total:0,
})
export const CartProvider = ({ children }) => {

    const [cart,setCart] = useState([])


    const addItem = (item,quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev,{...item,quantity}])
        } else {
            const updatedCart = cart.map((prod) =>
              prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
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
    const totalQuantity = () => {
        return cart.reduce((acc, prod) => (acc += prod.quantity), 0);
      };
    

     const calculateTotalPrice = (cart) => {
        return cart
        .reduce((acc,prod) => acc + prod.price * prod.quantity,0)
        
    }

    const total = calculateTotalPrice(cart);
    return (
        <CartContext.Provider value = {{cart,setCart,addItem,removeItem,totalQuantity,clearCart,calculateTotalPrice,total}}>
            {children}
        </CartContext.Provider>

    )
}