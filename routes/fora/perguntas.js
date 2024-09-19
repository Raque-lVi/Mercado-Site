var express = require('express');
var router = express.Router();
const Users = require('../../models/perguntas');
const { route } = require('..');



/* GET users listing. */
router.get('/', async function(req, res, next) {

  try {

    const users = await Users.find()
    res.status(200).json(users)

  } catch (error) {
    res.status(500).json({error:error})
  }

});


router.post('/', async function(req, res, next) {
  
  const{
    name,
    email,
    message} = req.body

  var usuarior = {
    Nome: name,
    Email: email,
    pergunta: message
  };
  try {

    const users = await Users.create(usuarior);


    console.log(users)
    res.status(200).json({ success: true, message: 'deu certo marquim' });
  
  } catch (error) {
    console.error('Erro ao criar usuário no MongoDB:', error);
    res.status(500).json({ success: false, message: 'Erro ao comunicar com MongoDB' });
  }

});

module.exports = router;
