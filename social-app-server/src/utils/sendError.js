const sendError = (res, error, msg = "Something went wrong", status = 500) => {
  return res.status(status).json({
    msg,
    error: error?.message || error,
  });
};

module.exports = sendError;