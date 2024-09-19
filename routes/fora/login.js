var express = require('express');
var router = express.Router();
const Users = require('../../models/login');
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

    const {loginText, senhaText} = req.body


  try {

    const boo = await Users.findOne({ Login: loginText, Senha: senhaText })

    console.log(boo)

    if (!boo) {
      // alert("erro ao caçar usuario")
      return res.status(404).json({ error: 'Usuário não encontrado ou senha incorreta' });
    }
    
    res.status(200).json({ success: true, message: 'deu certo marquim' });

  } catch (error) {
    res.status(500).json({error:error})
  }

});


router.post('/cadastro', async function(req, res, next) {
  
  const{
    nome,
    email,
    senha} = req.body

  var usuarior = {
    Nome: nome, 
    Login: email,
    Senha: senha
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
