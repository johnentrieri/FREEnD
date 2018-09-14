var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

var statCalc = require('./statCalc'); 

var app = express();

//View Engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

//Pull DnD Character Data from JSON file
fileData = fs.readFileSync('siteData.json','utf8');
siteData = JSON.parse(fileData);

//Pull DnD Character Data from JSON file
fileData = fs.readFileSync('jentrieri.json','utf8');
baseData = JSON.parse(fileData);

//Pull DnD Spell Data from JSON file
fileData = fs.readFileSync('spells.json','utf8');
spellData = JSON.parse(fileData);

//TODO - Pull DnD Cantrip Data from JSON file

//TODO - Pull DnD Item Data from JSON file
fileData = fs.readFileSync('items.json','utf8');
itemData = JSON.parse(fileData);

//Perform Calculations
calcData = statCalc(baseData, spellData, itemData);

data = {
	base : baseData,
	calculated : calcData,
	site: siteData
};


//Set the callback function to run when a GET request is received
app.get('/', function(req,res) {
	res.render('index', data);
});

app.get(siteData.tab1Path, function(req,res) {
	res.render(siteData.tab1Name, data);
});

app.get(siteData.tab2Path, function(req,res) {
	res.render(siteData.tab2Name, data);
});

app.get(siteData.tab3Path, function(req,res) {
	res.render(siteData.tab3Name, data);
});

app.get(siteData.tab4Path, function(req,res) {
	res.render(siteData.tab4Name, data);
});

//Start listening on port 3000
app.listen(3000, function() {
	console.log('Server Started on Port 3000...');
});
