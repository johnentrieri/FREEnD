'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SpellSchema = new Schema({

    name: {
      type: String,
      unique: true,
      required: true
    },

    level: {
        type: Number,
        required: true
    },

    school: {
        type: String,
        required: true
    },

    castingTime: {
        type: String,
        required: true
    },

    range: {
        type: String,
        required: true
    },

    components: {
        type: String,
        required: true
    },

    duration: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    higherLevelDescription: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Spell', SpellSchema);