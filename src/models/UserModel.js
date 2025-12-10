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
    }
})
//mongoose.model("collectionName[table name]",userModel)
//db.users.find
//userMode.find

// mongoose.model("users",userModel)
// module.exports = userModel

//-->single line

module.exports = mongoose.model("users",userModel)

