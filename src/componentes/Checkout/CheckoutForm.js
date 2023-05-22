import React, { useState } from 'react'
import './CheckoutForm.css'




const CheckoutForm = ({createOrder}) => {
    const [name,setName] = useState('')
    const [surname,setSurname] = useState('')
    const [phone,setPhone] = useState ('')
    const [email,setEmail] = useState('')
    const [confirmEmail,setConfirmEmail] = useState('')
    const [error,setError] = useState('');

    const handleConfirm = (event) => { 

        event.preventDefault()

        if(email !== confirmEmail) {
            setError('Emails do not match, verify your email adress');
            return;
        }

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

  
    return (
        <div className='container'>
            <form onSubmit={handleConfirm} className='form'>
                <label className='label'>
                    Name:
                <input className='input' placeholder='Enter your name'
                type='text'
                value={name}
                 onChange={handleNameChange}
                 required
                 />
                </label>

                <label className='label'>
                    Surname:
                <input className='input' placeholder='Enter your surname'
                type='text'
                value={surname}
                 onChange={handleSurnameChange}
                 required
                 />
                </label>

                <label className='label'>
                    Phone:
                <input className='input'placeholder='Enter your phone number'
                type='number'
                value={phone}
                 onChange={handlePhoneChange}
                 required
                 />
                </label>

                <label className='label' >
                    Email:
                <input className='input' placeholder='Enter your e-mail adress'
                type='email'
                value={email}
                 onChange={({target}) => setEmail(target.value)}
                 required
                 />
                </label>

                <label className='label'>
                    Confirmar Email:
                    <input  className='input' placeholder='Confirm your e-mail adress' 
                      type="email"
                      value={confirmEmail}
                      onChange={({target}) => setConfirmEmail(target.value)}
                      required
                    />
                </label>
                {error && <p className='error'>{error}</p>}
                
                <button className='button' type='submit'>Confirm</button>
            </form>
        </div>

    )

}
export default CheckoutForm
