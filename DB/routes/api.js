var express = require('express');
var router = express.Router();

var character = require('../controllers/characterController');
var spell = require('../controllers/spellController')

// Character API Calls
router.route('/characters')
  .get(character.getAllCharacters)
  .post(character.createCharacter);

router.route('/characters/:charId')
  .get(character.getCharacter)
  .put(character.updateCharacter)
  .delete(character.deleteCharacter);

// Spell API Calls
router.route('/spells')
.get(spell.getAllSpells)
.post(spell.createSpell);

router.route('/spells/:spellId')
.get(spell.getSpell)
.put(spell.updateSpell)
.delete(spell.deleteSpell);

module.exports = router;