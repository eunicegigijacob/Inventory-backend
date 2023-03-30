const user = require("../models/user.model");

async function createUserService(newUser){
    try {
        const userCreated = await user.create(newUser)
        return userCreated
    } catch (error) {
        console.log(error)
        return 'not created'
    }
}


module.exports= {createUserService}