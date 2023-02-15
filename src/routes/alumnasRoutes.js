const express = require ("express")
const app = express()

const router = express.Router()

const alumnasController = require("../controllers/alumnasController")

router.get("/nuevaAlumna", alumnasController.nuevaAlumna)

module.exports=router