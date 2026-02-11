const jwt = require("jsonwebtoken")
const secret ="samir"

const validateToken= (req,res,next)=>{


    try{

            var token = req.headers.authorization
            if(token){
                if(token.startsWith("Bearer ")){ //Bearer salasjcjiaijmiohaidbiahbanas
                     token = token.split(" ")[1]
                     const decoded = jwt.verify(token,secret)
                     console.log("decoded",decoded)
                     next()
                }
                else{
                    res.json({
                        message:"token is not bearer token"
                    })
                }

            }else{
                res.json({
                    message:"token is not present"
                })
            }
        
        

    }catch(err){
        res.json({
            message:"auth failed",
            err:err
        })
    }

}
module.exports ={
    validateToken
}