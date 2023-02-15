const path = require("path");
const express =require("express");
const app = express()

const PORT = process.env.PORT || 3000;

const mainRoutes = require("./routes/mainRoutes")
const alumnasRoutes = require("./routes/alumnasRoutes")
const usersRoutes = require("./routes/usersRoutes")

let session = require('express-session')

app.set("view engine","ejs")
app.set("views", path.join(__dirname,"views"))
app.use(session({secret:'Esto es SECRETO',resave:false, saveUninitialized:false}))

app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use("/users", usersRoutes)
app.use("/alumnas", alumnasRoutes)
app.use("/", mainRoutes)

app.listen(PORT, function(){console.log("Servidor corriendo " + PORT)});