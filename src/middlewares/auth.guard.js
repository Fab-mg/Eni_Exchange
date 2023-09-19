const jwt = require('jsonwebtoken');

const authenticateToken = function (req, res, next) {
  const token = req.headers['authorization'];
  console.log('token', token);

  if (token == null) {
    return res.status(401).send({ message: 'unauthenticated' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).send({ message: 'invalid token' });
    }
    req.user = user;
    next();
  });
  next();
};

module.exports = {
  authenticateToken,
};
