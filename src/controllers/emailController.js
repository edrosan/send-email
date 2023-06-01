const emailService = require("../services/emailService")

const getEmail = (req, res) => {
  const allEmails = emailService.getEmail();
  res.send(allEmails)
};

const sendEmail = (req, res) => {
  const { body } = req;

  if (
    !body.email ||
    !body.name ||
    !body.message
  ) {
    return;
  }

  const newEmail = {
    name: body.name,
    email: body.email,
    message: body.message,
  }

  const sendEmail = emailService.sendEmail(newEmail);

  res.status(201).send({status: "OK", data: newEmail});
};

module.exports = { sendEmail, getEmail }