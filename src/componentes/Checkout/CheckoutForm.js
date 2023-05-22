import React, { useState } from 'react'


const CheckoutForm = ({createOrder}) => {
    const [name,setName] = useState('')
    const [surname,setSurname] = useState('')
    const [phone,setPhone] = useState ('')
    const [email,setEmail] = useState('')

    const handleConfirm = (event) => { 

        event.preventDefault()

        const userData = {
            name,
            surname,
            phone,
            email
        }
        createOrder(userData) 
    }

    const handleNameChange = (event) => {
        const regex = /^[A-Za-z\s]+$/;
        if (regex.test(event.target.value) || event.target.value === '') {
          setName(event.target.value);
        }
      };

      const handleSurnameChange = (event) => {
        const regex = /^[A-Za-z\s]+$/;
        if (regex.test(event.target.value) || event.target.value === '') {
          setSurname(event.target.value);
        }
      };


    const handlePhoneChange = (event) => {
        const regex = /^[0-9]+$/;
        if (regex.test(event.target.value) || event.target.value === '') {
          setPhone(event.target.value);
    }
      };

      // no funciona validacion de email
      const handleEmailChange = (event) => {
        const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (regex.test(event.target.value) && event.target.value !== '') {
          setEmail(event.target.value);
        }
      };
    
    

    return (
        <div className='container'>
            <form onSubmit={handleConfirm} className='form'>
                <label className='label'>
                    Name:
                <input className='input' placeholder='Enter your name'
                type='text'
                value={name}
                 onChange={handleNameChange}/>
                </label>

                <label className='label'>
                    Surname:
                <input className='input' placeholder='Enter your surname'
                type='text'
                value={surname}
                 onChange={handleSurnameChange}/>
                </label>

                <label className='label'>
                    Phone:
                <input className='input'placeholder='Enter your phone number'
                type='text'
                value={phone}
                 onChange={handlePhoneChange}/>
                </label>

                <label className='label' >
                    Email:
                <input className='input' placeholder='Enter your e-mail adress'
                type='text'
                value={email}
                 onChange={({target}) => setEmail(target.value)}/>
                </label>
                
                <button className='button' type='submit'>Confirm</button>
            </form>
        </div>

    )

}
export default CheckoutForm
