const nodemailer = require('nodemailer');
const dns = require('dns');
require('dotenv').config({path:"auth.env"}); // Load environment variables from .env file

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

// Serverless function handler
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send the email' });
  }
};
