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

#TODO - flask.jsonify does not work with JSON "lists", needs to be an object
# @app.route('/characters/')
# def getCharacters():
#     chars = []
#     for char in myCampaign.characters:
#         tmpDict = char.getDictionary()
#         chars.append(tmpDict)    
#     return flask.jsonify(chars)

@app.route('/characters/<int:id>', methods=['GET'])
def getCharacterByID(id):
    charData = myCampaign.getCharacterByID(id).getDictionary()
    return flask.jsonify(charData)

@app.route('/modifyCharacterInfo/<int:id>', methods=['POST'])
def modifyCharacterInfo(id):
    modObject = flask.request.form
    myCampaign.getCharacterByID(id).modifyCharacterInfo(modObject)
    charData = myCampaign.getCharacterByID(id).getDictionary()
    return flask.jsonify(charData)

@app.route('/modifyCharacterStats/<int:id>', methods=['POST'])
def modifyCharacterStats(id):
    modObject = flask.request.form
    myCampaign.getCharacterByID(id).modifyCharacterStats(modObject)
    charData = myCampaign.getCharacterByID(id).getDictionary()
    return flask.jsonify(charData)

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
    
#
# Web Server End
#