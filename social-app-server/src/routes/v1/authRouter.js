const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth.controller");

router.post("/login", authController.login);
router.post("/register", authController.register);
router.delete("/logout", authController.logout);
router.put("/refresh_token", authController.refreshToken);

module.exports = router;