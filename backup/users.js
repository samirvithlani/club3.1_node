console.log("user file loaded")
var userName = "AMIT"
var userAge = 23
const getUserTest = ()=>{
    console.log("test user called....")
}
const printUserName = (name)=>{
    return name.toUpperCase()
}
//exports
// module.exports = userName
// module.exports = userAge

module.exports = {
    userName,userAge,getUserTest,printUserName
}

//module.exports = getUserTest