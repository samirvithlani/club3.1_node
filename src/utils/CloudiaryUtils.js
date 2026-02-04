const cloudinary = require("cloudinary").v2;

const uploadTocloudinary = async(path)=>{

    cloudinary.config({
        cloud_name:"add yours",
        api_key:"add yours",
        api_secret:"add yours"
    })

    const response = await cloudinary.uploader.upload(path)
    return response;

}
module.exports = {uploadTocloudinary}