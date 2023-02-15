const express = require ("express")
const app = express()
const db = require('../database/models')
const sequelize = db.sequelize

const {body} = require('express-validator')

const UserValidations=[
    body('nombre').notEmpty().withMessage('Campo Obligatorio'),
    body('apellido').notEmpty().withMessage('Campo Obligatorio'),
    body('email').notEmpty().withMessage('Campo Obligatorio').custom( async (value, {req}) => {
        
        let resultado = await db.Usuario.findAll({
          where:{
            email:req.body.email
        }
        })
        
        if (resultado.length > 0){
          throw new Error('El mail ingresado ya existe')
        }
        return true
    }),
    body('celular').notEmpty().withMessage('Campo Obligatorio'),
    body('contrasena').notEmpty().withMessage('Campo Obligatorio'),
    body('repetirPassword').notEmpty().withMessage('Campo Obligatorio').custom((value, {req}) =>{
        let password = req.body.contrasena
        let confPassword = req.body.repetirPassword
        if (password != confPassword){
          throw new Error('Las Contraseñas no coinciden')
        }
        return true
      })
]

const router = express.Router()

const userController = require("../controllers/usersController")

/* REGISTRO DE USUARIOS */
router.get("/register", userController.register)
router.post("/register", UserValidations, userController.newUser)

/* PERFIL DE USUARIO */
router.get("/userprofile", userController.profile)

/* AGREGAR ALUMNA */
router.get("/nuevaAlumna", userController.agregarAlumna)

module.exports=router