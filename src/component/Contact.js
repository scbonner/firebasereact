import React, { useState } from 'react'
import '../App.css'
import { db } from '../firebase.js';

export default function Contact() {
    const [name,setName] = useState('');
    const [company,setCompany] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    const [loader,setLoader] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

        db.collection('contacts').add({
            name:name,
            company:company,
            email:email,
            message:message,

     })
     .then(() => {
         alert('Your message has been received');
         setLoader(false);
         
     })
     .catch((error) => {
        alert(error.message);
        setLoader(false);
     }); 

   setName('');
   setCompany('');
   setEmail('');
   setMessage('');
};
    return (
        <form className='form' onSubmit={handleSubmit}>
            <h1>Contact/Firebase Form</h1>
            
                <label>Name</label>
                <input 
                placeholder='name'
                value={name}
                onChange={(e) => setName(e.target.value)} required />

                <label>Company</label>
                <input 
                placeholder='company'
                value={company}
                onChange={(e) => setCompany(e.target.value)} required />

                <label>Email</label>
                <input 
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} required />

                <label>Name</label>
                <textarea 
                placeholder='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)} required />

                <button 
                    type='submit'
                    style={{ background: loader ? '#ccc' : 'rgb(2,2,110)'}}>
                Submit</button>
        </form>
    )
}
