const category = require("../models/category.model");

async function createCategoryService(newCategory){
    try {
        const categoryCreated = await category.create(newCategory)
        return categoryCreated
    } catch (error) {
        console.log(error)
        return 'not created'
    }
}

module.exports = {createCategoryService}