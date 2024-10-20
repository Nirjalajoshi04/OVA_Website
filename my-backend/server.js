// server.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
require('dotenv').config();
const app = express();
const PORT = 5000;



// Enable CORS
app.use(cors());

// Parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Kaushik123@',
  database: 'contact_website',
});


db.connect((err) => {
  if (err) {
    console.error('Unable to connect to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Registration API endpoint
app.post('/api/contact', (req, res) => {
  const { firstName,lastName,email,companyName,phoneNumber,message,agreeToCommunications,agreeToStoreData } = req.body;

  const sql = 'INSERT INTO contact_submissions (firstName,lastName,email,companyName,phoneNumber,message,agreeToCommunications,agreeToStoreData) VALUES (?, ?, ?,?, ?, ?,?, ?)';
  db.query(sql, [firstName,lastName,email,companyName,phoneNumber,message,agreeToCommunications,agreeToStoreData], (err, result) => {
    if (err) {
      console.error('MySQL Error:', err);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    } else {
      res.status(200).json({ success: true, message: 'Registration successful' });
    }
  });
});

//Sending mails using SMTP server
const transporter = nodemailer.createTransport({
  host: 'smtp.zeptomail.in',
  port: 587, // or your port number
  secure: false, // or true for TLS
  auth: {
    user:  'emailapikey',
    pass:   "PHtE6r1cQevt3TYv8EII4KC8QM+lY9t6r+ljKQZHso1KAvEAS01T/955xzTm/xYuAPNKRf6Yytps4OzPu+nXJWfoMDwdXmqyqK3sx/VYSPOZsbq6x00esF8ZdkffVoboc9Ns1CzTvN/SNA==",
  },
});
 

app.post('/api/send-email',  (req, res) => {
   
    const { firstName,lastName,email,companyName,phoneNumber,message,solutionType,agreeToCommunications,agreeToStoreData} = req.body;
    const formData = req.body;

    // Create the email template
    

    const source = `
    <h1 style="font-family: Lato">Dear ${firstName}!</h1>
     <div style="font-family: Roboto">
    
  <p>Thank you for contacting <b>OVA!</b>
   We've received your inquiry and a member of our team will be in touch with you shortly via ${email} or ${phoneNumber} to address your request.</p>
  <p><b>Please note:</b> This email address (noreply@ova.ngo) is not monitored for replies.</p>
  <p>In the meantime, you can visit our Help Center [link] for answers to frequently asked questions.</p>
  <p>We look forward to assisting you further!</p>
  <p>Sincerely,</p>
  <p>The <b>OVA</b> Team.</p>`;

  const source1 = `<div style="font-family: Lato"> Dear Team,</div>
<div style="font-family: Roboto">
<p>A new inquiry has been submitted through the contact us form</p>
<p><b>Name: </b>${firstName} ${lastName}<br>
   <b>Email Address: </b>${email} <br>
   <b>Company Name: </b>${companyName} <br>
   <b>Phone Number: </b>${phoneNumber} <br>
   <b>Message: </b>${message} <br>
   <b>Solution Requirements: </b>${solutionType} <br>
</p>
<p>Please review the inquiry and assign it to the appropriate team member for follow-up.</p>
<p>Thanks</p>
<p></p>
<p>The <b>orelse</b> Team.</p>
</div>`;
// Create a template function
const template = handlebars.compile(source);
const template1 = handlebars.compile(source1);
// Generate the HTML content
const html = template({ name: 'orelseCli' });
const html1 = template1({ name: 'orelse' });
    const mailOptionsList = [{
      from: "noreply@ova.ngo", // Sender email address
      to: req.body.email , // Recipient email address
      subject: `Thanks for contacting OVA! ${firstName}`,
      text: `
       Dear ${firstName},
         
      `,
      html: html
       
    },
    {
      from: "noreply@ova.ngo", // Sender email address
      to: 'vishal@orelse.ai', // Recipient email address
      subject: `Thanks for contacting orelse! ${solutionType}`,
      text: `
       Dear ${firstName},
         
      `,
      html:html1
       
    }];

    mailOptionsList.forEach(mailOptions => {
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              console.error('Error:', error);
          } else {
              console.log('Email sent:', info.response);
          }
      });
    
       
  });
})


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


 
