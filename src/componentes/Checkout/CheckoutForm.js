import React, { useState } from 'react'

const CheckoutForm = ({onConfirm}) => {
    const [name,setName] = useState('')
    const [phone,setPhone] = useState ('')
    const [email,setEmail] = useState('')

    const handleConfirm = (event) => { 

        event.preventDefault()

        const userData = {
            name, phone,email
        }
        onConfirm(userData) 
    }
    return (
        <div className='container'>
            <form onSubmit={handleConfirm} className='form'>
                <label className='Label'>
                    Name:
                <input className='input'
                type='text'
                value={name}
                 onChange={({target}) => setName(target.value)}/>
                </label>

                <label className='Label'>
                    Phone:
                <input className='input'
                type='text'
                value={phone}
                 onChange={({target}) => setPhone(target.value)}/>
                </label>

                <label className='Label'>
                    Email:
                <input className='input'
                type='text'
                value={email} onChange={({target}) => setEmail(target.value)}/>
                </label>
                
                <button className='button' type='submit'>Confirm</button>
            </form>
        </div>

    )

}
export default CheckoutForm
