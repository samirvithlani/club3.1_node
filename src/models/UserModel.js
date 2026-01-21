const mongoose = require("mongoose")
const Schema = mongoose.Schema; //class object

const userModel = new Schema({
    //fileds define...
    name:{
        type:String
    },
    age:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    },
    hobbies:[
        {
            type:String
        }
    ],
    bloodGroup:{
        type:String,
        enum:["A+","A-","B+","B-"]
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    roleId:{
        type:Schema.Types.ObjectId,
        ref:"roles"
    }
})
//mongoose.model("collectionName[table name]",userModel)
//db.users.find
//userMode.find

// mongoose.model("users",userModel)
// module.exports = userModel

//-->single line

module.exports = mongoose.model("users",userModel)

