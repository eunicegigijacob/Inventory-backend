const stock = require('../models/stock.model');
const { updateProductService } = require('../services/productService');
const { createStockService } = require('../services/stockService');
const { handleErrors } = require('../utils/errorHandler');

const createStock = async (req, res) => {
  const { stockName, category, quantity } = req.body;
  try {
    if (stockName && category && quantity) {
      const result = await createStockService({
        stockName,
        category,
        quantity,
      });
      if (result) {
        const productResult = await updateProductService({
          ProductName: result.stockName,
          totalQuanitiy: parseInt(totalQuantity + result.quantity),
          new:true
        });
        res
          .status(200)
          .json({
            stockName: result.stockName,
            category: result.category,
            quantity: result.quantity,
            date: result.createdAt,
          });
      }
    }
  } catch (error) {
    const errors = handleErrors(error);
    console.log(errors.message)
    //res.status(400).json({ errors.message});
  }
};

module.exports = { createStock };
