const mongoose = require('mongoose')
// String, Number, 
// Boolean, Date, 
// array = [String],
// array de numeros = [Number],
// binario = Buffer,
// valor sem tipo especifico = mongoose.Schema.Types.Mixed
// objeto_id para relacionamento entre coleçoes = mongoose.Schema.Types.ObjectId
// decimal128 = mongoose.Schema.Types.Decimal128
// hach table de estrutura de dados = Map
// simulação de chave estrangeira = { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }

const UserSchema = new mongoose.Schema({

    Nome: String,
    Login: String,
    Senha: String

}, {
    collection: 'Pessoas'  // Adiciona o nome da coleção aqui
});

const Merc = mongoose.model('Pessoas', UserSchema)

module.exports = Merc;

