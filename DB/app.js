//External Modules
var express = require('express');
var mongoose = require('mongoose');

//Server-specific private info
var private = require('./private/private')

//MongoDB Models
var Character = require('./models/characterModel');
var Spell = require('./models/spellModel');

//API Route
var apiRouter = require('./routes/api');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//MongoDB Connection
mongoose.Promise = global.Promise;
mongoose.connect(private.dbURL, { useNewUrlParser: true }); 

app.use('/api', apiRouter);

module.exports = app;