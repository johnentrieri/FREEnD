'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema = new Schema({

    firstName: {
      type: String,
      required: true
    },

    lastName: {
        type: String,
        required: true
    },

    level: {
        type: String,
        min: 1,
        max: 20,
        required: true
    },

    class: {
        type: String,
        enum: ['Bard'],
        required: true
    },

    race: {
        type: String,
        enum: ['Halfling'],
        required: true
    },

    subrace: {
        type: String,
    },

    age: {
        type: Number,
        required: true
    },

    height: {
        type: String,
        required: true
    },

    weight: {
        type: String,
        required: true
    },

    //TODO - enum
    background: {
        type: String,
        required: true
    },

    //TODO - enum
    alignment: {
        type: String,
        required: true
    },

    languages: {
        type: [String]
    },

    abilities: {

        strength: {
            type: Number,
            required: true
        },

        dexterity: {
            type: Number,
            required: true
        },

        constitution: {
            type: Number,
            required: true
        },

        intelligence: {
            type: Number,
            required: true
        },

        wisdom: {
            type: Number,
            required: true
        },

        charisma: {
            type: Number,
            required: true
        },
    },

    stats: {

        HP: {
            type: Number,
            required: true
        },

        maxHP: {
            type: Number,
            required: true
        },

        hitDie: {
            type: Number,
            required: true
        },

        armorClass: {
            type: Number,
            required: true
        },
    },

    updatedOn: {
      type: Date,
      default: Date.now
    },

});

module.exports = mongoose.model('Character', CharacterSchema);