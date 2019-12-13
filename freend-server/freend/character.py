#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Nov  2 00:24:42 2019

@author: pi
"""
import math
import json

class Character(object):
    
    def __init__(self,charDB,campaign):
        self.inputDataFile = charDB
        self.campaign = campaign

        self.buildCharacter()

    def buildCharacter(self):

        tempFile = open(self.inputDataFile,'r+')
        self.inputData = json.loads(tempFile.read())['character']  
        tempFile.close() 
        
        self.getCharacterInfo()
        self.calculateStats()
        self.populateInventory()
        self.learnSpells()
        
        self.classData = { "classAbilities" : [] }

    def modifyCharacterInfo(self,modObject):
        tempFile = open(self.inputDataFile,'r+')
        tempData = json.loads(tempFile.read())
        tempFile.close()

        for key in modObject.keys():
            if key in tempData['character'].keys():
                tempData['character'][key] = modObject[key]

        tempFile = open(self.inputDataFile,'w+')
        tempFile.write(json.dumps(tempData))
        tempFile.close()

        self.buildCharacter()

    def modifyCharacterStats(self,modObject):
        tempFile = open(self.inputDataFile,'r+')
        tempData = json.loads(tempFile.read())
        tempFile.close()

        for key in modObject.keys():
            if key in tempData['character']['stats'].keys():
                tempData['character']['stats'][key] = modObject[key]

        tempFile = open(self.inputDataFile,'w+')
        tempFile.write(json.dumps(tempData))
        tempFile.close()

        self.buildCharacter()
        
    def getCharacterInfo(self):
        self.info = {} 
        self.info['id'] = self.inputData['id']
        self.info['name'] = self.inputData['firstName'] + ' ' + self.inputData['lastName']
        self.info['level'] = int(self.inputData['level'])
        self.info['class'] = self.inputData['class']
        self.info['race'] = self.inputData['race']
        self.info['subrace'] = self.inputData['subrace']
        self.info['age'] = self.inputData['age']
        self.info['height'] = self.inputData['height']
        self.info['weight'] = self.inputData['weight']
        self.info['alignment'] = self.inputData['alignment']
        self.info['background'] = self.inputData['background']
        self.info['languages'] = self.inputData['languages']
        
    def calculateStats(self):
        self.stats = {}
        self.stats['hitDie'] = int(self.inputData['stats']['hitDie'])
        self.stats['maxHitDie'] = self.info['level']
        self.stats['HP'] = int(self.inputData['stats']['HP'])
        self.stats['maxHP'] = int(self.inputData['stats']['maxHP'])
        self.stats['armorClass'] = int(self.inputData['stats']['armorClass'])
        self.stats['spellSlots'] = self.inputData['stats']['spellSlots']        
        self.calculateProficiencyBonus()
        self.calculateSpeed()
        self.calculateAbilities()
        self.calculateSkills()
        
    def populateInventory(self):
        self.inventory = {
                "currency" : {},
                "weapons" : [],
                "armor" : [],
                "items" : []
        }
        
        self.calculateCurrency()
        self.organizeInventory()
        
    def learnSpells(self):
        self.spells = []
        
        for charSpell in self.inputData['spells']:
            for dbSpell in self.campaign.spells:                
                if (charSpell == dbSpell['spell']):
                    self.spells.append(dbSpell)
        
    def calculateCurrency(self):
        self.inventory['currency'] = self.inputData['currency']
        self.inventory['currency']['total'] = (self.inventory['currency']['platinum'] * 10.0) + (self.inventory['currency']['gold'] * 1.0) + (self.inventory['currency']['silver'] * 0.1) + (self.inventory['currency']['copper'] * 0.01)
    
    def calculateSpeed(self):
        if (self.info['race'] == 'Halfling'):
            self.stats['speed'] = 25
        elif (self.info['race'] == 'Gnome'):
            self.stats['speed'] = 25
        elif (self.info['race'] == 'Dwarf'):
            self.stats['speed'] = 25
        elif (self.info['race'] == 'Dragonborn'):
            self.stats['speed'] = 30
        elif (self.info['race'] == 'Elf'):
            self.stats['speed'] = 30
        elif (self.info['race'] == 'Half-Elf'):
            self.stats['speed'] = 30
        elif (self.info['race'] == 'Half-Orc'):
            self.stats['speed'] = 30
        elif (self.info['race'] == 'Human'):
            self.stats['speed'] = 30
        elif (self.info['race'] == 'Tiefling'):
            self.stats['speed'] = 30
        else:
            self.stats['speed'] = 25
    
    def calculateProficiencyBonus(self):        
        #Calculate Proficiency Bonus based on Level
        if (self.info['level'] <= 4):
            self.stats['profBonus'] = 2
        elif (self.info['level'] <= 8):
            self.stats['profBonus'] = 3
        elif (self.info['level'] <= 12):
            self.stats['profBonus'] = 4
        elif (self.info['level'] <= 16):
            self.stats['profBonus'] = 5
        else:
            self.stats['profBonus'] = 6
    
    def calculateAbilities(self):        
        #Create Base Dictionaries
        self.stats['abilities'] = {
                'strength' : {},
                'dexterity' : {},
                'constitution' : {},
                'intelligence' : {},
                'wisdom' : {},
                'charisma' : {}
        }
        
        #Base Ability Score
        for key in self.stats['abilities'].keys():
            self.stats['abilities'][key]['score'] = int(self.inputData['abilities'][key])
            self.stats['abilities'][key]['isSaveProf'] = self.inputData['saveProficiency'][key]
        
            #Base Modifier
            self.stats['abilities'][key]['mod'] = math.floor( (self.stats['abilities'][key]['score'] - 10) / 2)
            self.stats['abilities'][key]['check'] = self.stats['abilities'][key]['mod']
        
            #Save Modifier
            if (self.stats['abilities'][key]['isSaveProf']):
                self.stats['abilities'][key]['save'] = self.stats['abilities'][key]['mod'] + self.stats['profBonus']
            else:
                self.stats['abilities'][key]['save'] = self.stats['abilities'][key]['mod']
                
    def calculateSkills(self):
        
        #Create Base Dictionaries
        
        self.stats['skills'] = {
                'acrobatics' : { 'base' : 'dexterity' },
                'animalHandling' : { 'base' : 'wisdom' },
                'arcana' : { 'base' : 'intelligence' },
                'athletics' : { 'base' : 'strength' },
                'deception' : { 'base' : 'charisma' },
                'history' : { 'base' : 'intelligence' },
                'insight' : { 'base' : 'wisdom' },
                'intimidation' : { 'base' : 'charisma' },
                'investigation' : { 'base' : 'intelligence' },
                'medicine' : { 'base' : 'wisdom' },
                'nature' : { 'base' : 'intelligence' },
                'perception' : { 'base' : 'wisdom' },
                'performance' : { 'base' : 'charisma' },
                'persuasion' : { 'base' : 'charisma' },
                'religion' : { 'base' : 'intelligence' },
                'sleight' : { 'base' : 'dexterity' },
                'stealth' : { 'base' : 'dexterity' },
                'survival' : { 'base' : 'wisdom' }
        }
        
        for key in self.stats['skills'].keys():
            baseKey = self.stats['skills'][key]['base']
            self.stats['skills'][key]['isCheckProf'] = self.inputData['checkProficiency'][key]
            
            if (self.stats['skills'][key]['isCheckProf']):
                self.stats['skills'][key]['check'] = self.stats['abilities'][baseKey]['mod'] + self.stats['profBonus']
            else:
                self.stats['skills'][key]['check'] = self.stats['abilities'][baseKey]['mod']
                
        self.stats['initiative'] = self.stats['abilities']['dexterity']['check']
        self.stats['passivePerception'] = 10 + self.stats['skills']['perception']['check']
        
    def organizeInventory(self):
        for charItem in self.inputData['inventory']:
            for dbItem in self.campaign.items:                
                if (charItem['item'] == dbItem['item']):
                    tempItem = dbItem
                    tempItem['quantity'] = charItem['qty']
                    tempItem['equipped'] = charItem['equipped']
                    if(tempItem['type'] == 'Weapon'):
                        self.inventory['weapons'].append(tempItem)
                    elif (tempItem['type'] == 'Armor'):
                        self.inventory['armor'].append(tempItem)
                    else:
                        self.inventory['items'].append(tempItem)
                        
    def getDictionary(self):
        outputDict = {}
        outputDict['info'] = self.info
        outputDict['stats'] = self.stats
        outputDict['inventory'] = self.inventory
        outputDict['spells'] = self.spells
        outputDict['classData'] = self.classData
        
        return(outputDict)
                        
                    
        
                