const category = require('../models/category.model');
const { createCategoryService } = require('../services/categoryService');
const { handleErrors } = require('../utils/errorHandler');

const createCategory = async (req, res) => {
  const { categoryName } = req.body;
  try {
    if (categoryName) {
      const result = await createCategoryService({ categoryName });
      if (result) {
        res.status(200).json({ result});
      }
    }
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};

module.exports = { createCategory };
