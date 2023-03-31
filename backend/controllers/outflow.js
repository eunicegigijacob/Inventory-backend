const { findCheckoutService } = require("../services/stockService")

const outflow = async (req, res) =>{
    const outflow = []
    const outflows = await findCheckoutService()
    for (let singleOutflow of outflows){
        outflow.push(singleOutflow)
    }
    return res.status(200).json(outflow);
}


module.exports = {outflow}