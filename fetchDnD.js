const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'dnd';

function fetchDnD(callback) {

    //create blank object for return data
    //var items = {};

    // Use connect method to connect to the server
    MongoClient.connect(url, {useNewUrlParser : true}, function(err, client) {

        console.log("Connected successfully to server");

        client.db(dbName).collection('items').find().toArray( function(err,docs) {
            var items = docs;
        });
    })
    callback(items);    
}

module.exports = fetchDnD;