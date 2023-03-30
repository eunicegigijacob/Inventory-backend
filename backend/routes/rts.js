const express = require('express');
const { createProduct } = require('../controllers/productControl');
const { registerUser, loginUser } = require('../controllers/userControl')

const routeManager = express.Router()

routeManager.post('/', registerUser);
routeManager.post('/login', loginUser);
routeManager.post('/addProduct', createProduct)


module.exports= routeManager;