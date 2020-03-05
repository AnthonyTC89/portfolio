const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

router.get('/api/experience', async (req, res) => {
  const experience = await Experience.find();
  res.json(experience);
});

module.exports = router;
