const express = require("express");
const app = express(); //create an object of express..
const mongoose = require("mongoose")
app.use(express.json()) //() global middlware /apply -> it will accept data as json

//routes required..
const userRoutes = require("./src/routes/UserRoutes")
//routes use

app.use(userRoutes)

//server creation..



mongoose.connect("mongodb://127.0.0.1:27017/club3_1_node").then((data)=>{
  console.log("database connected..")
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started PORT ${PORT}`);
});
