const express = require('express');
const cors = require('cors');
const nodeMailer = require('nodemailer');
const app = express();

const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
        user: 'redalert@gmail.com',
        pass: 'redalert123',
    },
})

app.use(cors({
    origin: '*'
}))

app.get('/api', (req, res) => {
    res.statusCode(200).json({'status': 'OK'});
});

app.post('/api/contact', (req, res) => {
    let email = req.body.email;
    let subject = req.body.subject;
    let message = req.body.message;

    console.log(email, subject, message);
    
    let mailOptions = {
        from: 'redalert@gmail.com',
        to: email,
        subject: subject,
        text: "Thank you for contacting us. We will get back to you as soon as possible.",
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            res.status(500).json({'status': 'Error'});
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({'status': 'OK'});
        }
    })
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});