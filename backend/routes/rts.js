const express = require('express')
const { registerUser, loginUser } = require('../controllers/userControl')

const routeManager = express.Router()

routeManager.post('/', registerUser);
routeManager.post('/login', loginUser);


module.exports= routeManager;