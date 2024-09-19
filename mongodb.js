


// para essa pagina funcionar é necessario ligar ela ao bin/www com o codigo a seguir:
// var mongodb = require('../mongodb')      {{{{{ou com mongodb.js

const mongoose = require('mongoose')

const uRLBanco = "mongodb+srv://vivianraquel:itaborai@cluster0.gd0q71n.mongodb.net/mercado?retryWrites=true&w=majority&appName=Cluster0"


mongoose.connect(uRLBanco, {})
.then(()=>{
    console.log("deu certo a conexão com banco de dados")
}).catch((error) => {
    console.error('erro ao conectar, ajeita issooooooo', error)
})
