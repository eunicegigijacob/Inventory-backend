const user = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const {
  createUserService,
  findUserService,
} = require('../services/userService');
const { createToken, maxAge } = require('../services/tokenService');

const registerUser = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    if (username && password && role) {
      const hash = bcrypt.hashSync(password, saltRounds);
      const result = await createUserService({
        username,
        password: hash,
        role,
      });
      if (result) {
        res.status(200).json({ message: 'user created' });
      } else {
        res.status(404).json({ messege: 'user not created' });
      }
    }
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (username && password) {
        const result = await findUserService({ username });
        if (result) {
          const valid = await bcrypt.compare(password, result.password);
          if (valid) {
            const token = createToken(result._id);
            res.cookie('jwt', token, {
              httpOnly: false,
              sameSite: 'None',
              secure: true,
              maxAge: maxAge * 1000,
            });
            res.status(200).json({ user: result.role });
            //console.log(result)
          } else {
            res.json({ message: 'incorrect password' });
            console.log('incorrect password');
          }
        } else {
          res.json({ message: 'user not found' });
        }
      } else {
        res.json({ message: 'enter user details' });
        console.log('enter user details');
      }
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
  
};

module.exports = { registerUser, loginUser };
