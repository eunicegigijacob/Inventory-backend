const { authMiddlewares } = require("../middleware/auth");
const { findStockService } = require("../services/stockService");
const { handleErrors } = require("../utils/errorHandler");


const inflowDashboard = async (req,res)=>{
    try {
        const result = await findStockService()
    if(result){
       console.log(result) 
       res.status(200).json({message: result})
    }
    } catch (error) {
        
    }
    
}

module.exports = {inflowDashboard}