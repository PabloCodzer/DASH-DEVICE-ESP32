require("dotenv").config()
const mongoose = require('mongoose');

const usu =  process.env.usu
const passwd = process.env.passwd

const url = "mongodb+srv://" + usu + ":" + passwd + "@device-esp.wd5rl.mongodb.net/Device?retryWrites=true&w=majority&appName=DEVICE-ESP";

// Conectar ao MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso!');
  })
  .catch((err) => {
    console.log('Erro ao conectar ao MongoDB: ', err);
  });