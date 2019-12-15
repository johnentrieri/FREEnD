#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import json
import freend
import flask

spell_db_file = './db/spells/spells.json'
item_db_file = './db/items/items.json'
character_directory = './db/char/'

myCampaign = freend.Campaign(spell_db_file,item_db_file)

char_file_list = os.listdir(character_directory)

for file in char_file_list:
    myCampaign.addCharacter(character_directory + file)

#
# Web Server Begin
#
app = flask.Flask(__name__)

@app.route('/')
def index():
    return "Welcome!"

# @app.route('/characters/')
# def getCharacters(): 

#     response = flask.jsonify({'characters' : myCampaign.getCharacters()})
#     response.headers.add('Access-Control-Allow-Origin', '*')   
#     return response

@app.route('/spells/')
def getSpells():

    response = flask.jsonify({'spells' : myCampaign.getSpells()})
    response.headers.add('Access-Control-Allow-Origin', '*')   
    return response

@app.route('/items/')
def getItems(): 

    response = flask.jsonify({'items' : myCampaign.getItems()})
    response.headers.add('Access-Control-Allow-Origin', '*')   
    return response

@app.route('/characters/<int:id>', methods=['GET'])
def getCharacterByID(id):
    charData = myCampaign.getCharacterByID(id).getDictionary()

    response = flask.jsonify(charData)
    response.headers.add('Access-Control-Allow-Origin', '*')    
    
    return response

@app.route('/modifyCharacterInfo/<int:id>', methods=['POST'])
def modifyCharacterInfo(id):
    modObject = flask.request.form
    myCampaign.getCharacterByID(id).modifyCharacterInfo(modObject)
    charData = myCampaign.getCharacterByID(id).getDictionary()
    
    response = flask.jsonify(charData)
    response.headers.add('Access-Control-Allow-Origin', '*')    
    
    return response

@app.route('/modifyCharacterStats/<int:id>', methods=['POST'])
def modifyCharacterStats(id):
    modObject = flask.request.form
    myCampaign.getCharacterByID(id).modifyCharacterStats(modObject)
    charData = myCampaign.getCharacterByID(id).getDictionary()
    
    response = flask.jsonify(charData)
    response.headers.add('Access-Control-Allow-Origin', '*')    
    
    return response

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
    
#
# Web Server End
#