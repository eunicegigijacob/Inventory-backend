const { Schema, model } = require('mongoose');


const stockSchema = new mongoose.Schema({
    stockName: {
      type: String,
      required: true,
      unique: true
    },
    category: {
      type: String,
      required: true,
    },

    quantity: {
        type: Number,
        required: true
    },
  },
  {timestamps:true}
  );

  const stock = model('stock', stockSchema)

  module.exports = stock;
  