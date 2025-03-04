const UserModel = require("../models/User");
const { getUserByEmail } = require("../services/auth.services");
const { hashPassword, comparePassword } = require("../utils/hash");
const { createRefreshToken, createAccessToken, verifyRefreshToken } = require("../utils/jwt");
const redis = require("../utils/redis");
const { registerSchema } = require("../utils/validate");

module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await getUserByEmail(email);

      if (!user) {
        return res
          .status(401)
          .json({ success: false, message: "Email or Password incorrect" });
      }

      if (!comparePassword(password, user.password)) {
        return res
          .status(401)
          .json({ success: false, message: "Email or Password incorrect" });
      }

      const accessToken = createAccessToken({ userId: user._id });
      const refreshToken = createRefreshToken(user._id);

      await redis.connect();
      await redis.set(`RefreshToken:${user.id}`, refreshToken, "EX", 7 * 24 * 60 * 60);
      await redis.close();

      return res.status(200).json({ success: true, message: "Login successful", accessToken, refreshToken, user });
    } catch (error) {
      res.status(500).json({ error: err.message });
    }
  },
  register: async (req, res) => {
    try {
      const { fullName, email, password } = req.body;

      await registerSchema.validate(req.body);

      const existingUser = await getUserByEmail(email);

      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const newUser = new UserModel({
        fullName,
        email,
        isAdmin: false,
        password: hashPassword(password),
      });

      await newUser.save();

      return res
        .status(201)
        .json({ success: true, message: "User registered successfully", data: newUser });
    } catch (error) {
      console.log("error", error);
      return res.status(500).json({ success: false, message: error.message });
    }
  },
  logout: async (req, res) => {
    try {
      const accessToken = req.headers.authorization?.split(" ")[1];

      if (!accessToken) {
        return res.status(400).json({ message: "Access token is missing" });
      }

      await redis.connect();
      await redis.set(`Blacklist:${accessToken}`, "revoked", "EX", 24 * 60 * 60); // Hết hạn sau 1 ngày
      await redis.close();

      return res.status(200).json({ message: "Logout successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Logout failed", error: error.message });
    }
  },
  refreshToken: async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.status(401).json({ message: "No refresh token provided" });

    try {
      const { userId } = verifyRefreshToken(refreshToken);
      await redis.connect();
      const storedToken = await redis.get(`RefreshToken:${userId}`);

      if (!storedToken || storedToken !== refreshToken) {
        return res.status(403).json({ message: "Invalid refresh token" });
      }

      const newAccessToken = createAccessToken({ userId });
      await redis.close();

      return res.status(200).json({ success: true, accessToken: newAccessToken });
    } catch (error) {
      return res.status(403).json({ success: false, message: "Refresh token failed", errors: error.message });
    }
  },
};
