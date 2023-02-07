const path = require("path");
const express =require("express");
const app = express()

const PORT = process.env.PORT || 4000;


const mainRoutes = require("./routes/mainRoutes")


app.set("view engine","ejs")
app.set("views", path.join(__dirname,"views"))

app.use(express.static(path.join(__dirname,"public")))

app.use("/", mainRoutes)
app.listen(PORT, function(){console.log("Servidor corriendo 4000")});