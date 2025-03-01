const User = require("../models/User")

module.exports = {
  login: async (req, res) => {
    return res.status(200).json({ message: "ok" })
  },
  register: async (req, res) => {
    try {
      const { fullName, email, password } = req.body

      const newUser = new User({
        fullName,
        email,
        password
      })

      await newUser.save()

      return res.status(200).json({ message: "ok" })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}