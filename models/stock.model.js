const { Schema, model } = require('mongoose');

const stockSchema = new Schema(
  {
    stockName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const stock = model('stock', stockSchema);

module.exports = stock;
