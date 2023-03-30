const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  ProductName: {
    type: String,
    required: true,
    unique: true,
  },
});

const Product = model('Product', productSchema);

module.exports = Product;
