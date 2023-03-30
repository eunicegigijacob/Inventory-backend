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


module.exports= {createStockService};