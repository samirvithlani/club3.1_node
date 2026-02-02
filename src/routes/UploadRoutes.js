const router = require("express").Router()
const uploadController = require("../controllers/UploadController")

router.post("/upload",uploadController.uplaodFile)

module.exports = router