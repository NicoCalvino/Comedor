const path = require("path")
const fs = require("fs")

let rutaBase = "alumnas"

const controller = {
    nuevaAlumna: async (req, res) => {
        res.render(rutaBase + "/nuevaAlumna")
    }
}

module.exports = controller