const { authMiddlewares } = require('../middleware/auth');
const { findStockService } = require('../services/stockService');
const { handleErrors } = require('../utils/errorHandler');

const inflowDashboard = async (req, res) => {
    const inflowArray = []
  try {
    const results = await findStockService();
    if (results) {
        for (let stock of results){
           inflowArray.push(stock)
            console.log()
        }
        res.status(200).json(inflowArray);
    }

  } catch (error) {
    handleErrors(error)
  }
};

module.exports = { inflowDashboard };
