const product = require('../models/product.model');
const { createProductService } = require('../services/productService');
const { handleErrors } = require('../utils/errorHandler');

const createProduct = async (req, res) => {
  const { ProductName, restockingLevel } = req.body;
  try {
    if (ProductName && restockingLevel) {
      const result = await createProductService({
        ProductName,
        restockingLevel,
        totalQuantity: parseInt(0)
      });
      if (result) {
        res
          .status(200)
          .json({
            productName: result.ProductName,
            restockingLevel: result.restockingLevel,
          });
      }
    }
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};
module.exports = { createProduct };
