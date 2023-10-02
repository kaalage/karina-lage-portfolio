import React from 'react';
import { useState } from 'react';
import ContactTitle from '../Assets/contact-title.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [showPopup, setShowPopup] = useState(false); 

  function sendEmail (e) {
    e.preventDefault();
    
    if (name === '' || email === '' || message === '') {
      alert("Please fill all the fields");
      return;
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message
    }

    emailjs.send('service_m4pq6u5', 'template_oyd1loc', templateParams, 'zGHiZ2fxJjU9JpyXN')
    .then((response) => {
      console.log('Email sent', response.status, response.text)
      setName('');
      setEmail('');
      setMessage('');
      setEmailSent(true);
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 2000); 

    }, (err) => {
      console.log("Failed: ", err)
    })
  }

  return (
    <div className="contact-page-wrapper">
      <div className="contact-form-container">
        <div className="contact-heading">
            <img src={ContactTitle} alt="" />
        </div>
        <div>
            <p className="contact-subheading">Have questions? Ask away!</p>
        </div>
        <form onSubmit={sendEmail}>
          <input 
            type="text" 
            placeholder="Name" 
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
          <input 
            type="email" 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
          <div className='form-input-message'>
          <textarea
            type="text" 
            placeholder="Message" 
            rows="4"
            style={{ resize: 'none' }}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            />
          </div>
          <div className='contact-button'>
            <input className="secondary-button" type="submit" value="Submit" />
          </div>
        </form>
        {showPopup && (
          <div className="email-sent-popup">
            <p>Email sent successfully!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact;