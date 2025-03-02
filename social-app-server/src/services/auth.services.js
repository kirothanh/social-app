const User = require("../models/User");

module.exports = {
  getUserByEmail: async (email) => {
    try {
      const user = await User.findOne({ email });

      return user || null;
    } catch (error) {
      throw error;
    }
  }
}