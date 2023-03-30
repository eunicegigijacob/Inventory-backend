const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: {
      type: String,
      required: true,
      unique: true
    },
    category: {
      type: String,
      required: true,
    },

    stockNumber: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        required: true
    }
  });

  const product = mongoose.model('product', productSchema)

  module.exports = product;
  