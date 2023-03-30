const user = require("../models/user.model");
const { createUserService } = require("../services/userService");


const registerUser = async (req, res)=>{
    if(username&&password&&role){
        const result = await createUserService({
            username,password,role
        })
        if (result){
            res.status(200).json({message: "user created"})
        }else{
            res.status(404).json({messege: "user not created"})
        }
    }
}

module.exports = {registerUser}