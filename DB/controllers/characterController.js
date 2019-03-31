'use strict';

var mongoose = require('mongoose');
var Character = mongoose.model('Character');

exports.getAllCharacters = function(req, res) {
    Character.find({}, function(err, characters) {
      if (err) {
        res.send(err);
      }
      res.json(characters);
    });
  };

exports.createCharacter = function(req, res) {
    var newCharacter = new Character(req.body);
    newCharacter.save( function(err,char) {        
        if (err) {
            res.send(err);
        }
        res.json(char);
    });
};

exports.getCharacter = function(req, res) {
    Character.findById(req.params.charId, function(err, char) {
        if (err) {
            res.send(err);
        }
        res.json(char);
    });
};

exports.updateCharacter = function(req, res) {
    Character.findOneAndUpdate({_id: req.params.charId}, req.body, {new: true}, function(err, char) {
        if (err) {
            res.send(err);
        }
        res.json(char);
    });
};

exports.deleteCharacter = function(req, res) {
    Task.remove({_id: req.params.charId}, function(err, char) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Character successfully deleted' });
    });
};