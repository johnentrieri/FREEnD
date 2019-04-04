var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;

var statCalc = require('./statCalc');
//var fetchDnD = require('./fetchDnD'); 

// Connection URL
var url = 'mongodb://localhost:27017';

// Database Name
var dbName = 'dnd';
var itemCollectionName = 'items';


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

//Pull Campaign Data from JSON file
fileData = fs.readFileSync('campaign.json','utf8');
campaignData = JSON.parse(fileData);

/*
MongoClient.connect(url, {useNewUrlParser : true}, function(err, client) {

	console.log("Connected successfully to server");

	client.db(dbName).collection(itemCollectionName).find().toArray( function(err,docs) {
		var itemData = docs;
	});
})
*/


//Perform Calculations
calcData = statCalc(baseData, spellData, itemData);

data = {
	base : baseData,
	calculated : calcData,
	site: siteData,
	campaign: campaignData
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

app.get(siteData.tab5Path, function(req,res) {
	res.render(siteData.tab5Name, data);
});

//Start listening on port 3002
app.listen(3002, function() {
	console.log('Server Started on Port 3002...');
});
