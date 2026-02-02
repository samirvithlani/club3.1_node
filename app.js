const express = require("express");
const app = express(); //create an object of express..
const mongoose = require("mongoose")
app.use(express.json()) //() global middlware /apply -> it will accept data as json

//routes required..
const userRoutes = require("./src/routes/UserRoutes")
//routes use
app.use("/user",userRoutes)


const roleRoutes = require("./src/routes/RoleRoutes")
app.use("/role",roleRoutes)
//server creation..

const uploadRoutes = require("./src/routes/UploadRoutes")
app.use("/upload",uploadRoutes)


mongoose.connect("mongodb://127.0.0.1:27017/club3_1_node").then((data)=>{
  console.log("database connected..")
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server started PORT ${PORT}`);
});
