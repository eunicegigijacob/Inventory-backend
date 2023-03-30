const checkoutStock = require("../models/checkoutStock.model");

async function createCheckoutService(newCheckout){
    try {
        const checkoutCreated = await checkoutStock.create(newCheckout)
        return checkoutCreated
    } catch (error) {
        console.log(error)
        return 'not created'
        
    }
}

module.exports = {createCheckoutService}