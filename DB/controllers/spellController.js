'use strict';

var mongoose = require('mongoose');
var Spell = mongoose.model('Spell');

exports.getAllSpells = function(req, res) {
    Spell.find({}, function(err, spells) {
      if (err) {
        res.send(err);
      }
      res.json(spells);
    });
  };

exports.createSpell = function(req, res) {
    var newSpell = new Spell(req.body);
    newSpell.save( function(err,spell) {        
        if (err) {
            res.send(err);
        }
        res.json(spell);
    });
};

exports.getSpell = function(req, res) {
    Spell.findById(req.params.spellId, function(err, spell) {
        if (err) {
            res.send(err);
        }
        res.json(spell);
    });
};

exports.updateSpell = function(req, res) {
    Spell.findOneAndUpdate({_id: req.params.spellId}, req.body, {new: true}, function(err, spell) {
        if (err) {
            res.send(err);
        }
        res.json(spell);
    });
};

exports.deleteSpell = function(req, res) {
    Spell.remove({_id: req.params.spellId}, function(err, spell) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Spell successfully deleted' });
    });
};