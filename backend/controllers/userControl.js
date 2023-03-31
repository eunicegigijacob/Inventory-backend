const user = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config()
const {
  createUserService,
  findUserService,
} = require('../services/userService');
const { createToken, maxAge } = require('../services/tokenService');
const { handleErrors } = require('../utils/errorHandler');
const secret = process.env.SECRET


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
    //const errors = handleErrors(error);
    res.status(400).json({ error });
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
          const token = createToken({userId: result._id, role: result.role});
          res.cookie('jwt', token, {
            //httpOnly: false,
            //sameSite: 'None',
            //secure: true,
            maxAge: maxAge * 1000,
          });
          res.status(200).json({ user: result.role });
        } else {
          console.log('incorrect password');
          throw Error('incorrect password');
        }
      } else {
        throw Error('user not found')
      }
    } else {
      throw Error('enter user details')
      console.log('enter user details');
    }
  } catch (error) {
    const errors = handleErrors(error);
    console.log(error.message);
    res.status(400).json({ errors });
  }
};

module.exports = { registerUser, loginUser };
