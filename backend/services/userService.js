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

async function findUserService(username){
    try {
        const findUser = await user.findOne(username)
        return findUser
    } catch (error) {
        console.log(error)
        return 'not found'
    }
}


module.exports= {createUserService, findUserService}