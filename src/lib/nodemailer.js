const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});


const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve('./views/'), 
    defaultLayout: false, 
  },
  viewPath: path.resolve('./views/'), 
  extName: '.handlebars', 
};

transporter.use('compile', hbs(handlebarOptions));

async function sendEmail(context) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVE,
    subject: 'New update from Tyc website',
    template: 'contact', 
    context: context,
  };

  return transporter.sendMail(mailOptions);
}
module.exports = { sendEmail };
