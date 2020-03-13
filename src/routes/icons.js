const express = require('express');

const router = express.Router();
const Icons = require('../models/Icons');

router.get('/api/icons', async (req, res) => {
  const icons = await Icons.find();
  res.json(icons);
});

module.exports = router;
