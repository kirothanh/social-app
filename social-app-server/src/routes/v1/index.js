const express = require("express");
const router = express.Router();
const authRouter = require("../v1/authRouter")
const userRouter = require("../v1/userRouter")
const { isAuthorized } = require("../../middlewares/authMiddleware")

router.get('/status', (req, res) => {
  res.status(200).json({ message: 'APIs V1 are ready to use.' })
})

router.use("/auth", authRouter)
router.use("/user", isAuthorized, userRouter)

module.exports = router;