const express = require('express');
const sgMail = require('@sendgrid/mail');

const router = express.Router();

router.post('/sendEmail', async (req, res) => {
  const { to, text } = req.body.params;
  const from = 'ptonyptc@gmail.com';
  const subject = 'Portfolio - autoReply';
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msgReply = {
    to,
    from,
    subject,
    text: 'Thank you for writting, I will contact to you as soon as possible.' };
  const msgOwner = {
    to: from,
    from: to,
    subject: 'Portfolio contact',
    text,
  };
  const result = await sgMail.send(msgReply);
  await sgMail.send(msgOwner);
  res.json(result);
});

module.exports = router;
