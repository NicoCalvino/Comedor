const path = require("path")
const fs = require("fs")

let rutaBase = "main"

const controller = {
    index: async (req, res) => {
        res.render(rutaBase + "/login")
    }
}

module.exports = controller