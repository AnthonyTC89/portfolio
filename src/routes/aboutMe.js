const express = require('express');

const router = express.Router();
const AboutMe = require('../models/AboutMe');

router.get('/api/aboutMe', async (req, res) => {
  const aboutMe = await AboutMe.find();
  res.json(aboutMe);
});

module.exports = router;
