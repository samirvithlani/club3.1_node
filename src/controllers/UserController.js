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

const addUser = async(req,res)=>{

        //req -->body,params,query,headers
        //body {}
        //params :id
        //query ?
        console.log(req.body) //json data
        //db.users.insert({"name":"amit",age:23})
        //db.users.insert(req.body)
        const savedUser = await userModel.create(req.body) //try
        res.json({
            message:"post api called..",
            data:savedUser
        })

}

module.exports ={
    getAllUsers,
    getUserById,
    addUser
}