const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

var transporter = nodemailer.createTransport({
    // service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        type: "OAuth2",
        user: 'hornbeeks@gmail.com',
        clientId: '9078048588-oo0k0grp6mtplrhulckm6chk9h0732fc.apps.googleusercontent.com',
        clientSecret: 'Ef3uWP3hp_PeMbfT_OVRGM1e',
        refreshToken: '1/bWdP_Oh40fNjZwhUviQNCH2us3nVYr4EsSEdklgOd_I',
        accessToken: "ya29.GluUBgWaDROVR4Isp0qfv8jHldY3bciAi2ptKFjX1Rg5j3U_3c47SnlxJAnXSab62IAlM2A9u2pad5scY7cHp71Th6ouCZ1hWLav6XXBM90z2ZBC_QBpyI-5kKkb"
    },
    secureConnection: "false",
    tls: {
        ciphers: "SSLv3",
        rejectUauthorized: false
    }
});

var mailOptions = {
    from: 'hornbeeks@gmail.com',
    to: 'hbeeken@hotmail.com',
    subject: 'Nodemailer test',
    text: 'Hello World Hi darcy!!'
}

transporter.sendMail(mailOptions, function (err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log('Email Sent');
    }
});