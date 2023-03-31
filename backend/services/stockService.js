const checkoutStock = require("../models/checkoutStock.model")
const stock = require("../models/stock.model")

async function createStockService(newStock){
    try {
        const stockCreated = await stock.create(newStock)
        return stockCreated
    } catch (error) {
        console.log(error)
        return 'not created'
    }
}

async function findStockService(){
    try {
        const findStock = await stock.find({}, {_id : 0, updatedAt: 0}).sort([['createdAt', 'descending']])
        return findStock
    } catch (error) {
        console.log(error)
        return'not found'
    }
}

async function findCheckoutService(){
    try {
        return await checkoutStock.find({}, {_id : 0, updatedAt: 0}).sort([['createdAt', 'descending']]) 
    } catch (error) {
        console.log(error.message, error)
    }
}

module.exports= {createStockService, findStockService, findCheckoutService};