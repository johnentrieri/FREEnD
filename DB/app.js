var express = require('express');
var private = require('./private/private')
var mongoose = require('mongoose');
var Character = require('./models/characterModel');
var apiRouter = require('./routes/api');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.Promise = global.Promise;
mongoose.connect(private.dbURL, { useNewUrlParser: true }); 

app.use('/api', apiRouter);

module.exports = app;