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

async function updateProductService(id, newQuantity) {

  try {
    const productUpdate = await product.findByIdAndUpdate(id, {totalQuantity: newQuantity}, {new: true})
    return productUpdate;
  } catch (error) {
    console.log(error)
  }
}


async function searchProductService(ProductName){
 
    const productSearch = await product.find(ProductName)
    return productSearch


}

module.exports = { createProductService, updateProductService, searchProductService };
