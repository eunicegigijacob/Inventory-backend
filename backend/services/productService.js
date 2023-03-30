const product = require("../models/product.model")


async function createProductService(newProduct){
    try {
        const productCreated = await product.create(newProduct)
        return productCreated
    } catch (error) {
        console.log(error)
        return 'not created'
    }
}

module.exports= {createProductService}