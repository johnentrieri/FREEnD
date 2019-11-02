# -*- coding: utf-8 -*-
"""
Created on Sat Nov  2 12:57:33 2019

@author: johne
"""
import freend

class Campaign():
    
    def __init__(self,spellDB,itemDB):
        self.spells = spellDB
        self.items = itemDB
        
        self.characters = []
        
    def addCharacter(self,charDB):
        if (charDB['class'] == "Bard"):
            self.characters.append(freend.Bard(charDB,self))
            
    def getCharacters(self):
        return(self.characters)
        
    def getCharacterByID(self,id):
        for char in self.characters:
            if (char.info['id'] == id):
                return(char)