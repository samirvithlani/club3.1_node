const validationMiddleware = (schema)=>(req,res,next)=>{
    //schema == userValidaitonSchema
    try{
        schema.parse(req.body) //req.body == userValidationSchema
        next()
    }catch(err){
        res.json({
            err:err
        })
    }
}
module.exports = {validationMiddleware}
