const UserModel = require("../models/User");
const { getUserByEmail } = require("../services/auth.services");
const { registerSchema } = require("../utils/validate");

module.exports = {
  login: async (req, res) => {
    return res.status(200).json({ message: "ok" });
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
        password,
      });

      await newUser.save();

      return res
        .status(201)
        .json({ success: true, message: "User registered successfully" });
    } catch (error) {
      console.log("error", error);
      return res.status(500).json({ success: false, message: error.message });
    }
  },
};
