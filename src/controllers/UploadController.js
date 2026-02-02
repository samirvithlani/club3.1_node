const multer  = require("multer")

const storage = multer.diskStorage({
    destination:"./uploads",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({
    storage:storage,
}).single("profilepic")



const uplaodFile = async(req,res)=>{

        upload(req,res,(err)=>{
            if(err){
                res.json({
                    message:"error while uploading file",
                    error:err
                })
            }
            else{
                res.json({
                    message:"file uploaded successfully",
                    data:req.file
                })
            }
        })
    
}
module.exports = {
    uplaodFile
}