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
        const findStock = await stock.findAll()
        return findStock
    } catch (error) {
        console.log(error)
        return'not found'
    }
}

module.exports= {createStockService, findStockService};