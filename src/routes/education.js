const express = require('express');
const router = express.Router();
const Education = require('../models/Education');

router.get('/api/education', async (req, res) => {
  const education = await Education.find();
  res.json(education);
});

module.exports = router;