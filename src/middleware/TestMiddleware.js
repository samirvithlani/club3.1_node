//req.res.next

//req.body,req.params,req.query,req.headers
//object,id,search?,auth
const validateMiddleware=async(req,res,next)=>{

    const token = req.headers.token;
    if(token){
        next()
    }
    else{
        res.json({
            message:"token missing..."
        })
    }

}
module.exports = {
    validateMiddleware
}