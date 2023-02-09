const path = require("path")
const fs = require("fs")

let rutaBase = "users"

const controller = {
    register: async (req, res) => {
        res.render(rutaBase + "/register")
    },
    profile: async (req, res) => {
        res.render(rutaBase + "/profile")
    }
}

module.exports = controller