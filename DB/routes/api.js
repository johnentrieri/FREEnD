var express = require('express');
var router = express.Router();

var character = require('../controllers/characterController')

router.route('/characters/')
  .get(character.getAllCharacters)
  .post(character.createCharacter);

router.route('/characters/:charId')
  .get(character.getCharacter)
  .put(character.updateCharacter)
  .delete(character.deleteCharacter);

module.exports = router;