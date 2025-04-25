const UserModel = require("../models/User");

module.exports = {
  getUser: async (req, res) => {
    try {
      const userId = req.userId;
      console.log(userId)

      const user = await UserModel.findById(userId).select("-password");

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}