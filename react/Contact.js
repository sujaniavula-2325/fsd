// src/Contact/Contact.js
import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      alert('Please fill all fields');
      return;
    }
    
    if (!email.includes('@')) {
      alert('Please enter valid email');
      return;
    }
    
    alert('Message sent successfully!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      
      <div className="contact-box">
        <h2>Send us a Message</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Your Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          
          <div className="input-group">
            <label>Your Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          
          <div className="input-group">
            <label>Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              rows="5"
            />
          </div>
          
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
        
        <div className="contact-info">
          <h3>Our Information</h3>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@bookmall.com</p>
          <p>Address: 123 Book Street, Library City</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;