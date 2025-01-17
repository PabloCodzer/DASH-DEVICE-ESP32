const rota = require("express").Router()
const devices  = require("./devices")



rota.use("/devices", devices)

rota.get("/", (req, res) => { 
    res.json({
        success: true,
        mensagem: "rota privada"
    })
})


module.exports = rota