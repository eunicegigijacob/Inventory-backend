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
  },

  totalQuantity:{
    type:Number
  }
  
});

const product = model('product', productSchema);

module.exports = product;
