const product = require('../models/product.model');
const { createProductService } = require('../services/productService');

const createProduct = async (req, res) => {
  const { ProductName } = req.body;
  try {
    if (ProductName) {
      const result = await createProductService({ ProductName });
      if (result) {
        res.status(200).json({ message: 'product created', result });
      }
    }
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};

module.exports = { createProduct };
