const nodemailer = require("nodemailer");

const getEmail = () => {
  return "Emails"
}

const sendEmail = (data) => {
  async function main(data) {
    let testAccount = await nodemailer.createTestAccount();
  
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "edo.rod.san@gmail.com", // generated ethereal user
        pass: "yhgjomkctbeppyjm", // generated ethereal password
      },
    });
  
    let info = await transporter.sendMail({
      from: `"Contactar" <${data.email}>`, // sender address
      to: "iscrazyhappy@gmail.com", // list of receivers
      subject: data.name, // Subject line
      text: data.message, // plain text body
      html: `${data.message}`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
  
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
  
  main(data).catch(console.error);
}

module.exports = { sendEmail, getEmail }