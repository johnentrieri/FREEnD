#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import json
import freend
import flask

spell_db_file = './db/spells/spells.json'
item_db_file = './db/items/items.json'
character_directory = './db/char/'

tempFile = open(spell_db_file,'r+')
spell_db = json.loads(tempFile.read())
tempFile.close()

tempFile = open(item_db_file,'r+')
item_db = json.loads(tempFile.read())
tempFile.close()

myCampaign = freend.Campaign(spell_db,item_db)

char_file_list = os.listdir(character_directory)

for file in char_file_list:
    tempFile = open(character_directory+file,'r+')
    tempChar = json.loads(tempFile.read())['character']    
    myCampaign.addCharacter(tempChar)
    tempFile.close()

#
# Web Server Begin
#
app = flask.Flask(__name__)

@app.route('/')
def index():
    return "Welcome!"

@app.route('/characters/')
def getCharacters():
    chars = []
    for char in myCampaign.characters:
        tmpDict = char.getDictionary()
        chars.append(tmpDict)
    return flask.jsonify(chars)

@app.route('/characters/<int:id>', methods=['GET'])
def getCharacterByID(id):
    charData = myCampaign.getCharacterByID(id).getDictionary()
    return flask.jsonify(charData)

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
    
#
# Web Server End
#