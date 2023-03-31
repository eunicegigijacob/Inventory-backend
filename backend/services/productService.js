const product = require('../models/product.model');

async function createProductService(newProduct) {
  try {
    const productCreated = await product.create(newProduct);
    return productCreated;
  } catch (error) {
    console.log(error);
    return 'not created';
  }
}

async function updateProductService(filter, newQuantity) {
  try {
    const productUpdate = await product.findOneAndUpdate(
      {
        filter,
        newQuantity,
      },
      { new: true }
    );
    return productUpdate;
  } catch (error) {}
}

module.exports = { createProductService, updateProductService };
