const express = require('express');
const { createCategory } = require('../controllers/categoryControl');
const { createProduct } = require('../controllers/productControl');
const { registerUser, loginUser } = require('../controllers/userControl');

const routeManager = express.Router();

routeManager.post('/auth/register', registerUser);
routeManager.post('/auth/login', loginUser);
routeManager.post('/addProduct', createProduct);
routeManager.post('/addCategory', createCategory);

module.exports = routeManager;
