# -*- coding: utf-8 -*-
"""
Created on Sat Nov  2 12:57:33 2019

@author: johne
"""
import freend
import json

class Campaign():
    
    def __init__(self,spellFile,itemFile):
        
        self.spell_db_file = spellFile
        self.item_db_file = itemFile

        self.buildCampaign()

    def buildCampaign(self):

        self.characters = []

        tempFile = open(self.spell_db_file,'r+')
        self.spells = json.loads(tempFile.read())
        tempFile.close()

        tempFile = open(self.item_db_file,'r+')
        self.items = json.loads(tempFile.read())
        tempFile.close()

    def checkCharacterClass(self,charFile):
        tempFile = open(charFile,'r+')
        charClass = json.loads(tempFile.read())['character']['class']
        tempFile.close()
        return(charClass)
        
    def addCharacter(self,charFile):
        if (self.checkCharacterClass(charFile) == "Bard"):
            self.characters.append(freend.Bard(charFile,self))
            
    def getCharacters(self):
        return(self.characters)
        
    def getCharacterByID(self,id):
        for char in self.characters:
            if (char.info['id'] == id):
                return(char)