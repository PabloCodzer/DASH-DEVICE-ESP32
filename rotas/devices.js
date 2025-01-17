const rota = require("express").Router()
const bodyParser = require("body-parser")
const DeviceModel =  require("../models/DeviceModels")

rota.use(bodyParser.json())

rota.get("/", async (req, res) => { 
    try{
        const listaDevices = await DeviceModel.find(); 
        res.status(200).json({
            success : true,
            devices : listaDevices
        })
    }catch(err){ 
        res.status(400).json({
            success : false,
            erro: "Erro ao buscar devices"
        })
    }
})

rota.post("/device", async (req, res) => {
    const device = new DeviceModel({
        nome     : req.body.nome,
        kwh      : req.body.kwh,
        corrente : req.body.corrente,
        voltagem : req.body.voltagem,
        fp      : req.body.fp,
    })
    try
    {
        const NovoDevice = await device.save()
        res.status(201).json({
            success : true,
            device: NovoDevice
        })
    }
    catch(err)
    {
        res.status(400).json({
            success : false,
            erro    : "Erro ao cadastrar novo device",
            desc    : err.message
        })
    }    
})

rota.put("/device/:id", async (req, res) => {
    try
    {
        const updateDevice = await DeviceModel.updateOne(
            {_id      : req.params.id},
            {
                nome     : req.body.nome,
                kwh      : req.body.kwh,
                corrente : req.body.corrente,
                voltagem : req.body.voltagem,
                fp      : req.body.fp
            }
        )
        res.status(201).json({
            success : true,
            device: updateDevice
        })
    }
    catch(err)
    {
        res.status(400).json({
            success : false,
            erro    : "Erro ao Editar novo device",
            desc    : err.message
        })
    }    
})

rota.delete("/device/:id", async (req, res) => {
    try
    {
        const deleteteDevice = await DeviceModel.deleteOne(
            {_id      : req.params.id}
        )
        res.status(201).json({
            success : true,
            device: deleteteDevice
        })
    }
    catch(err)
    {
        res.status(400).json({
            success : false,
            erro    : "Erro ao Deletar novo device",
            desc    : err.message
        })
    }    
})

module.exports = rota