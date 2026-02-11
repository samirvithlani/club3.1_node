const router = require("express").Router()
const userController = require("../controllers/UserController")
const TestMiddleware = require("../middleware/TestMiddleware")
const zodmiddleware = require("../middleware/zodMiddleware")
const userValidationSchema =require("../validationschema/UserValidationSchema")
const upload= require("../middleware/UploadMiddleware")
const authMiddlware = require("../middleware/AuthMiddleware")

router.get("/users",authMiddlware.validateToken,userController.getAllUsers)
router.get("/user/:id",userController.getUserById)

router.post("/user",upload.single("file"),userController.addUser)
//router.post("/user",uploadMiddleware.upload.single("profilepic"),userController.addUser)

router.delete("/user/:id",userController.deleteUser)
router.put("/user/:id",userController.updateUser)
router.put("/user/addhobby/:id",userController.addNewHobby)
router.post("/login",userController.loginUser)


module.exports = router