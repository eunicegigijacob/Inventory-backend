const { authMiddlewares } = require("../middleware/auth");
const { findStockService } = require("../services/stockService");


const inflowDashboard = async (req,res)=>{
    
    const result = await findStockService()
    if(result){
       console.log(result) 
       res.status(200).json({message: result})
    }
}

module.exports = {inflowDashboard}