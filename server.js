const express = require("express")
const app =  express()
const PORT = 3030
const api  = require("./rotas/index")

app.use("/api", api)
app.get("/", (req, res) => { 
    res.json({
        success: true,
        mensagem: "rota inicial do projeto"
    })
})

app.listen(PORT)