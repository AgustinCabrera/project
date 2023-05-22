import React from 'react'
import './Loader.css'

export const Loader = () => {
  return (
    <div className='spinner'>
        <svg viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
        </svg>
    </div>
  )
}
