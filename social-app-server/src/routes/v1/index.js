const express = require("express");
const router = express.Router();
const authRouter = require("./authRouter");

router.get('/status', (req, res) => {
  res.status(200).json({ message: 'APIs V1 are ready to use.' })
})

router.use("/auth", authRouter)

module.exports = router;