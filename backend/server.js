const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/contact', async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    // Transporter config using Gmail
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mandlikpranav29@gmail.com', // your Gmail
            pass: 'wetureidhtwkxpgd'      // use App Password, NOT your regular password
        }
    });

    let mailOptions = {
        from: email,
        to: 'mandlikpranav29@gmail.com', // where you want to receive the message
        subject: 'New Contact from Portfolio!',
        text: `
You have a new message from your portfolio:

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Message: ${message}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ code: 200, message: "Message sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ code: 500, message: "Failed to send message" });
    }
});

app.listen(5000, () => {
    console.log("✅ Server is running on http://localhost:5000");
});
