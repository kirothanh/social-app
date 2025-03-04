const {
  JWT_ACCESS_SECRET,
  JWT_ACCESS_EXPIRE,
  JWT_REFRESH_SECRET,
  JWT_REFRESH_EXPIRE,
} = process.env;
const jwt = require("jsonwebtoken");

module.exports = {
  createAccessToken: (data) => {
    return jwt.sign(data, JWT_ACCESS_SECRET, { expiresIn: JWT_ACCESS_EXPIRE });
  },

  createRefreshToken: (userId) => {
    return jwt.sign(
      { userId, secretValue: `${new Date().getTime()}-${Math.random()}` },
      JWT_REFRESH_SECRET,
      { expiresIn: JWT_REFRESH_EXPIRE }
    );
  },

  verifyAccessToken: (accessToken) => {
    return jwt.verify(accessToken, JWT_ACCESS_SECRET);
  },

  verifyRefreshToken: (refreshToken) => {
    return jwt.verify(refreshToken, JWT_REFRESH_SECRET);
  },
};
