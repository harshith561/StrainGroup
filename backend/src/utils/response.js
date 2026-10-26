function sendSuccess(res, data = null, message = 'Operation successful', statusCode = 200) {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
}

function sendError(res, message = 'Operation failed', statusCode = 400, errors = null) {
  return res.status(statusCode).json({
    success: false,
    message,
    ...(errors && { errors }),
  });
}

module.exports = {
  sendSuccess,
  sendError,
};
