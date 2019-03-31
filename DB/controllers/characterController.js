'use strict';

var mongoose = require('mongoose');
var Character = mongoose.model('Character');

exports.getAllCharacters = function(req, res) {
    Character.find({}, function(err, characters) {
      if (err)
        res.send(err);
      res.json(characters);
    });
  };