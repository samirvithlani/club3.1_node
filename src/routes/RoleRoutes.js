const router = require("express").Router()
const roleController = require("../controllers/RoleController")

router.get("/",roleController.getAllRoles)
router.post("/",roleController.createRole)
module.exports = router