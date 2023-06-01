const express = require('express');
const router = express.Router();
const emailControler = require("../../controllers/emailController")

router
  .get('/', emailControler.getEmail)
  .post("/", emailControler.sendEmail)


module.exports = router;