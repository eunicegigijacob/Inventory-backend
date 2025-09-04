const jwt = require('jsonwebtoken');
const { handleErrors } = require('../utils/errorHandler');

const authMiddlewares = {
  verifyLoginToken: (req, res, next) => {
    const token = req.cookies.jwt;

    // check if token exists and verify
    if (token) {
      jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
          console.log(err.message);
          const errors = handleErrors(err);
          res.status(400).json({ errors, message: 'user not logged in' });
        } else {
          req.decoded = decoded;
          console.log(req.decoded);
          next();
        }
      });
    } else {
      res.status(400).json({ error: 'this is a protected page' });
    }
  },
};

module.exports = { authMiddlewares };
