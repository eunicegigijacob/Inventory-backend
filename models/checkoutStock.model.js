const { Schema, model } = require('mongoose');

const checkoutStockSchema = new Schema(
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

    employee: {
        type: String,
        required: true,
    },

    employeeId: {
        type: String,
        required: true
    },
  },
  { timestamps: true }
);

const checkoutStock = model('checkoutStock', checkoutStockSchema);

module.exports = checkoutStock;
