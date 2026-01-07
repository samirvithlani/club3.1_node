//api functions..
const userModel = require("../models/UserModel");
//userModel == db.users

const getAllUsers = async (req, res) => {
  //db.users.find
  //promise[]
  const users = await userModel.find();
  res.json({
    message: "get all users api called...",
    data: users,
  });
};
const getUserById = (req, res) => {
  res.json({
    message: "get user by id called..",
    id: req.params.id,
  });
};

const addUser = async (req, res) => {
  //req -->body,params,query,headers
  //body {}
  //params :id
  //query ?
  console.log(req.body); //json data
  //db.users.insert({"name":"amit",age:23})
  //db.users.insert(req.body)
  try {
    const savedUser = await userModel.create(req.body); //try
    res.json({
      message: "post api called..",
      data: savedUser,
    });
  } catch (err) {
    res.json({
      err: err,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    console.log(deletedUser);
    if (deletedUser) {
      res.status(200).json({
        message: "user deleted..",
      });
    } else {
      res.status(404).json({
        message: "user not found.",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "error while deleting user",
    });
  }
};
const updateUser = async (req, res) => {
  //db.users.update(id,data)
  //id == req.params.id
  //data=  req.body
  //const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body);
  const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body,{new:true});
  if (updatedUser) {
    res.json({
      message: "user updated successfully...",
      data: updatedUser,
    });
  } else {
    res.json({
      message: "user is not updated...",
    });
  }
};

//if hobby is already avaialble it should not add....
const addNewHobby = async(req,res)=>{

    const hobby = req.body.hobby
    const id = req.params.id

    try{
    const updatedUserafteraddhobby =await userModel.findByIdAndUpdate(id,{$push:{hobbies:hobby}},{new:true})
    //if else
      res.json({
        message:"hobby addedd successfull",
        data:updatedUserafteraddhobby
      })
    }catch(err){
      res.json({
        message:"errir while adding hobby ",
        err:err
      })
    }


}


module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  deleteUser,
  updateUser,
  addNewHobby
};
