const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connect DB success')
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

module.exports = connectDB