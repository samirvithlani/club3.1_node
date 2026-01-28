const router = require("express").Router()
const userController = require("../controllers/UserController")
const TestMiddleware = require("../middleware/TestMiddleware")
const zodmiddleware = require("../middleware/zodMiddleware")
const userValidationSchema =require("../validationschema/UserValidationSchema")

router.get("/users",TestMiddleware.validateMiddleware,userController.getAllUsers)
router.get("/user/:id",userController.getUserById)

router.post("/user",zodmiddleware.validationMiddleware(userValidationSchema),userController.addUser)

router.delete("/user/:id",userController.deleteUser)
router.put("/user/:id",userController.updateUser)
router.put("/user/addhobby/:id",userController.addNewHobby)
router.post("/login",userController.loginUser)


module.exports = router