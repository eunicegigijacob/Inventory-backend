const checkoutStock = require("../models/checkoutStock.model");
const { createCheckoutService } = require("../services/checkoutService");
const { handleErrors } = require("../utils/errorHandler");


const createCheckout = async (req, res)=>{
    const {stockName, category, quantity, employee, employeeId}= req.body;
    try {
        if(stockName&&category&&quantity&&employee&&employeeId){
            const result = await createCheckoutService({stockName, category, quantity, employee, employeeId})
            if(result){
                res.status(200).json({stockName:result.stockName, category:result.category, quantity:result.quantity, employee: result.employee, employeeId:result.employeeId, date: result.createdAt})
            }
        }
    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).json({errors});
    }
}


module.exports={createCheckout}