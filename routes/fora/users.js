var express = require('express');
var router = express.Router();
const Users = require('../../models/users');
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

module.exports = router;
