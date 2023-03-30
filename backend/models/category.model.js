const { Schema, model } = require('mongoose');


const categorySchema = new mongoose.Schema({
    categoryName: {
      type: String,
      required: true
    }
  });

  const category = model('category', categorySchema)

  module.exports = category;
  