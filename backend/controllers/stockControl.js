const product = require('../models/product.model');
const stock = require('../models/stock.model');

const { updateProductService } = require('../services/productService');
const { createStockService } = require('../services/stockService');
const { handleErrors } = require('../utils/errorHandler');

const createStock = async (req, res) => {
  const { stockName, category, quantity } = req.body;
  console.log(stockName, category, quantity);
  try {
    if (stockName && category && quantity) {
      const result = await createStockService({
        stockName,
        category,
        quantity,
      });

      if (result) {
        const filter = {
            ProductName: result.stockName,
          };

        const findProduct = await product.findOne(filter)
        const previousQuantity = parseInt(findProduct.totalQuantity + result.quantity)
        const productid = findProduct._id
        const update = { totalQuanitiy:  previousQuantity};

        const productResult = await updateProductService(productid, previousQuantity);
        console.log('this is update....' + productResult);
        if (productResult) {
          console.log(`++++`+ Object.keys(productResult));
          res.status(200).json({
            stockName: result.stockName,
            category: result.category,
            quantity: result.quantity,
            date: result.createdAt,
          });
        }
      }
    }
  } catch (error) {
    const errors = handleErrors(error);
    console.log(errors.message);
    //res.status(400).json({ errors.message});
  }
};

module.exports = { createStock };
