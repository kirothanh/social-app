const mongoose = require("mongoose");
const UserModel = require("../models/User");
const sendError = require("../utils/sendError");

module.exports = {
  follow: async (req, res) => {
    return res
      .status(200)
      .json({ success: true, message: "Get user successfully" });
  },
  getUsersNotFollowed: async (req, res) => {
    try {
      const currentUserId = req.params.id;
      const currentUser = await UserModel.findById(currentUserId);

      if (!currentUser) {
        return res.status(404).json({ msg: "User not found" });
      }

      const excludeIds = [currentUserId, ...currentUser.following];

      const usersToSuggest = await UserModel.aggregate([
        {
          $match: {
            _id: {
              $nin: excludeIds.map((id) => new mongoose.Types.ObjectId(id)),
            },
          },
        },
        { $sample: { size: 4 } },
        {
          $project: {
            password: 0,
          },
        },
      ]);

      res.status(200).json(usersToSuggest);
    } catch (error) {
      sendError(res, error);
    }
  },
};
