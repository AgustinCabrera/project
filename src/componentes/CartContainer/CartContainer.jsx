import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../assets/context/CartContext'

export const CartContainer = () => {

    const [loader,setLoader] = useState(true)
    const [isGenerated,idOrder] = useContext(OrderGeneratedContext);
      
      useEffect(() => {
        setTimeout(() => {
          setLoader(false)
        },1000)
        
      },[loader]);

    return loader ? (
        <LoadScreen />
    ) : isGenerated ? (
      <PurchaseScreen idOrder={idOrder} />
    ):(
      <section>
        <div>
          <Total />
          <ButtonD />
          <ItemOnCart />
        </div>
        <Purchase />
      </section>
    )
  }
