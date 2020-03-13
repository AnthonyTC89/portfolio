const express = require('express');
const sgMail = require('@sendgrid/mail');

const router = express.Router();

router.post('/sendEmail', async (req, res) => {
  const { to, text } = req.body.params;
  const from = 'ptonyptc@gmail.com';
  const subject = 'Portfolio - autoReply';
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = { to, from, subject, text };
  const result = await sgMail.send(msg);
  res.json(result);
});

module.exports = router;
