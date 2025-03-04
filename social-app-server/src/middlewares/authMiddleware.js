const { verifyAccessToken } = require("../utils/jwt");
const redis = require("../utils/redis");

module.exports = {
  isAuthorized: async (req, res, next) => {
    let accessTokenFromHeader = req.headers.authorization;

    if (accessTokenFromHeader?.startsWith('Bearer ')) {
      accessTokenFromHeader = accessTokenFromHeader.slice(7, accessTokenFromHeader.length);
    }

    if (!accessTokenFromHeader) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized! (Token Not Found)'
      });
    }

    try {
      await redis.connect();
      const isBlacklisted = await redis.get(`Blacklist:${accessTokenFromHeader}`);
      if (isBlacklisted) {
        return res.status(401).json({
          message: 'Token has been revoked. Please login again.'
        });
      }

      const { userId } = await verifyAccessToken(accessTokenFromHeader);
      req.userId = userId;
      next();
    } catch (error) {
      if (error.message?.includes('jwt expired')) {
        return res.status(410).json({
          message: 'Need to refresh token'
        })
      }

      return res.status(401).json({ message: 'Unauthorized! Please Login!' })
    }
  }
}