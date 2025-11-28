//api functions..
const userModel = require("../models/UserModel")
//userModel == db.users

const getAllUsers =async(req,res)=>{
    //db.users.find
    //promise[]
    const users = await userModel.find()
    res.json({
        message:"get all users api called...",
        data:users
    })

}
const getUserById = (req,res)=>{

    res.json({
        message:"get user by id called..",
        id:req.params.id
    })
}

module.exports ={
    getAllUsers,
    getUserById
}