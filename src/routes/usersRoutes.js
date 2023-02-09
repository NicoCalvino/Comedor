const express = require ("express")
const app = express()

const router = express.Router()

const userController = require("../controllers/usersController")

router.get("/register", userController.register)
router.get("/:id", userController.profile)

module.exports=router