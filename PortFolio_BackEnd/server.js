const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const dns = require('dns');
require('dotenv').config({ path: 'auth.env' }); // Load environment variables

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Utility function for email format validation
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Utility function for domain validation
function isValidDomain(domain) {
  return new Promise((resolve, reject) => {
    dns.resolveMx(domain, (err, addresses) => {
      if (err || addresses.length === 0) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}

// Route to handle sending email
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  const domain = email.split('@')[1];
  const domainValid = await isValidDomain(domain);
  if (!domainValid) {
    return res.status(400).json({ error: 'Invalid email domain' });
  }

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Use environment variable
      pass: process.env.EMAIL_PASS, // Use environment variable
    },
  });

  // Setup email data
  const mailOptions = {
    from: `"${name}" <${email}>`,  // Use sender's email address in the 'from' field
    replyTo: email,  // Ensure replies go to the sender's email
    to: process.env.EMAIL_USER, // Your email address to receive messages
    subject: `Message from ${name} <${email}>`,  // Include sender's name and email in the subject
    text: `You have received a new message from ${name} <${email}>:\n\n${message}`,  // Include sender's name and email in the message body
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send the email' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully!' });
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
