var express = require('express');
var router = express.Router();

var character = require('../controllers/characterController')

router.route('/characters/')
  .get(character.getAllCharacters);

module.exports = router;