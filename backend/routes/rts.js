const express = require('express');
const { createCategory } = require('../controllers/categoryControl');
const { createCheckout } = require('../controllers/checkoutControls');
const { inflowDashboard } = require('../controllers/dashboard');
const { outflow } = require('../controllers/outflow');
const { createProduct } = require('../controllers/productControl');
const { createStock } = require('../controllers/stockControl');
const { registerUser, loginUser } = require('../controllers/userControl');
const { authMiddlewares } = require('../middleware/auth');


const routeManager = express.Router();

routeManager.post('/auth/register', registerUser);
routeManager.post('/auth/login', loginUser);
routeManager.post('/addProduct', createProduct);
routeManager.post('/addCategory', createCategory);
routeManager.post('/addStock', createStock)
routeManager.post('/checkout', createCheckout )
routeManager.get('/adminDashboard', inflowDashboard)
routeManager.get('/checkout', outflow)

module.exports = routeManager;
