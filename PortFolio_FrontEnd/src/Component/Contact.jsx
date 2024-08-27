import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/Contact.css';
import linkedIn from '../assets/linkin.png';
import git from '../assets/github.svg';
import twitter from '../assets/twitter.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(''); // For showing success or error messages
  const [loading, setLoading] = useState(false); // For indicating submission in progress

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when submission starts

    // Simple client-side validation
    if (!validateEmail(formData.email)) {
      setStatus('Invalid email address.');
      setLoading(false);
      return;
    }

    if (!validateName(formData.name)) {
      setStatus('Name must be at least 2 characters long.');
      setLoading(false);
      return;
    }

    if (!validateMessage(formData.message)) {
      setStatus('Message must be at least 10 characters long.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://portfolio-f64b.onrender.com/send-email', formData);
      console.log('Server Response:', response.data);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear the form fields
    } catch (error) {
      console.error('There was an error sending the email!', error);
      setStatus('Failed to send the message. Please try again later.');
    } finally {
      setLoading(false); // Set loading state back to false when done
    }
  };

  // Basic email validation function
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Name validation
  const validateName = (name) => {
    return name.length >= 2;
  };

  // Message validation
  const validateMessage = (message) => {
    return message.length >= 10;
  };

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <div className="contact-main">
        <div className="contact-info">
          <div className="contact-details">
            <h2>Contact Information</h2>
            <p><strong>Phone:</strong> +91 8708684910</p>
            <p><strong>WhatsApp:</strong> +91 8950653320</p>
            <p><strong>Email:</strong> shabsingh961@gmail.com</p>
            <p><strong>Links:</strong></p>
            <ul>
              <li>
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedIn} alt="LinkedIn" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/ashu8950" target="_blank" rel="noopener noreferrer">
                  <img src={git} alt="GitHub" /> GitHub
                </a>
              </li>
              <li>
                <a href="https://x.com/AshuSin97381838" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="Twitter" /> Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send Me a Message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
          {status && <p className={`status-message ${status.includes('success') ? 'success' : 'error'}`}>{status}</p>}
        </div>
      </div>
      <div className="map">
        <h2>Find Me Here</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d<YOUR_LATITUDE>!2d<YOUR_LONGITUDE>!3d<YOUR_LATITUDE>!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x<YOUR_LATITUDE>!2s<YOUR_ADDRESS>!5e0!3m2!1sen!2sus!4v1635409898034!5m2!1sen!2sus"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
