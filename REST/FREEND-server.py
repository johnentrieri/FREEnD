#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import json
import freend

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

del tempFile, tempChar, spell_db, item_db