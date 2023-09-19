const jwt = require('jsonwebtoken');

const generateToken = async (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION_TIME });
};

module.exports = {
  generateToken,
};
