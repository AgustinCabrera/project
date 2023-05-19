import React from 'react'
import { useState } from 'react'

export const ItemCount = ({stock,initial,onAdd}) => {

    const [count, setCount] = useState(initial)

    const addCounter = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const removeCounter = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
  
  return (
    <div className='Counter'>
        <div className='counter-controls'>
            <button onClick={removeCounter} className='button-container'> - </button>
            <h4 className='Number'>{count}</h4>
            <button onClick={addCounter} className='button-container'>+</button>
        </div>

        <div>
            <button className='button-container'onClick= { () => onAdd(count)} disabled={!stock}>
                Add to cart
            </button>
        </div>
    </div>
  )
}

