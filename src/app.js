const path = require("path");
const express =require("express");
const app = express()

const PORT = process.env.PORT || 3000;


const mainRoutes = require("./routes/mainRoutes")
const usersRoutes = require("./routes/usersRoutes")

app.set("view engine","ejs")
app.set("views", path.join(__dirname,"views"))

app.use(express.static(path.join(__dirname,"public")))

app.use("/users", usersRoutes)
app.use("/", mainRoutes)

app.listen(PORT, function(){console.log("Servidor corriendo " + PORT)});