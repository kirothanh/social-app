const express = require("express");
const router = express.Router();

router.get('/status', (req, res) => {
  res.status(200).json({ message: 'APIs V1 are ready to use.' })
})

module.exports = router;