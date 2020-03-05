const express = require('express');

const router = express.Router();
const Information = require('../models/Information');

router.get('/api/information', async (req, res) => {
  const information = await Information.find();
  res.json(information);
});

module.exports = router;
