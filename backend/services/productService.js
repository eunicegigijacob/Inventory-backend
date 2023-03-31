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
console.log('==='+id, newQuantity)

  try {
    const productUpdate = await product.findByIdAndUpdate(id, {totalQuantity: newQuantity}, {new: true})
    console.log('wer'+productUpdate)
    return productUpdate;
  } catch (error) {
    console.log(error)
  }
}


async function searchProductService(product){

}

module.exports = { createProductService, updateProductService };
