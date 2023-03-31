const { authMiddlewares } = require('../middleware/auth');
const { findStockService } = require('../services/stockService');
const { handleErrors } = require('../utils/errorHandler');

const inflowDashboard = async (req, res) => {
  try {
    const result = await findStockService();
    if (result) {
      console.log(result);
      res
        .status(200)
        .json({
          productName: result.stockName,
          category: result.category,
          quantity: result.quantity,
          dateStocked: result.createdAt,
        });
    }
  } catch (error) {}
};

module.exports = { inflowDashboard };
