const path = require("path")
const fs = require("fs")
const bcryptjs = require('bcryptjs')
const db = require('../database/models')
const sequelize = db.sequelize
const { Op } = require("sequelize");
const {validationResult}=require('express-validator')

let rutaBase = "users"

const controller = {
    register: async (req, res) => {
        res.render(rutaBase + "/register")
    },
    profile: async (req, res) => {
        let emailLogged = req.session.userLogged
        let usuario = await db.Usuario.findAll({
            include:["alumnas"],
            where:{
                email:emailLogged
            }
        })
        let alumnas = usuario.alumnas
        console.log(alumnas)
        res.render(rutaBase + "/profile",{usuario:usuario[0],alumnas})
    },
    newUser: async(req, res) => {
        let erroresRegistro = validationResult(req)

        if (!erroresRegistro.isEmpty()){
            res.render(rutaBase + "/register",{errores:erroresRegistro.mapped(), oldInfo:req.body})
        }else{
            db.Usuario.create({
                nombre:req.body.nombre,
                apellido:req.body.apellido,
                email:req.body.email,
                celular:req.body.celular,
                contrasena:bcryptjs.hashSync(req.body.contrasena,10),
                rol_id:1,
            })
            req.session.userLogged = req.body.email
            res.redirect("/users/userprofile")
        }

        
    },
    agregarAlumna: async(req, res)=>{
        res.render(rutaBase + "/agregarAlumna")
    }
}

module.exports = controller