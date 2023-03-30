const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  ProductName: {
    type: String,
    required: true,
    unique: true,
  },

  restockingLevel: {
    type: Number,
    required: true
  }
  
});

const product = model('product', productSchema);

module.exports = product;
