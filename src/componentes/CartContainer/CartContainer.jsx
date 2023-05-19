import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../assets/context/CartContext'


const CartContainer = () => {

    const [loader,setLoader] = useState(true)
    
      useEffect(() => {
        setTimeout(() => {
          setLoader(false)
        },1000)
        
      },[loader]);

    return (
      {}
    )
}
export default CartContainer
