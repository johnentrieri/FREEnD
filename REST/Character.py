#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Nov  2 00:24:42 2019

@author: pi
"""

import math

class Character():
    
    def __init__(self,charData):
        self.data = charData
        
        self.getCharacterInfo() 
        self.calculateStats()      
        self.calculateAbilities()
        self.calculateSkills()
        self.calculateCurrency()
        
        
    def getCharacterInfo(self):
        self.info = {}
        self.info['id'] = self.data['id']
        self.info['name'] = self.data['firstName'] + ' ' + self.data['lastName']
        self.info['level'] = self.data['level']
        self.info['race'] = self.data['race']
        self.info['subrace'] = self.data['subrace']
        self.info['age'] = self.data['age']
        
    def calculateStats(self):
        self.stats = {}
        self.stats['maxHitDie'] = self.info['level']
        self.calculateProficiencyBonus()
        self.calculateSpeed()
        
    def calculateCurrency(self):
        self.currency = self.data['currency']
        self.currency['total'] = (self.currency['platinum'] * 10.0) + (self.currency['gold'] * 1.0) + (self.currency['silver'] * 0.1) + (self.currency['copper'] * 0.01)
    
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
        self.abilities = {
                'strength' : {},
                'dexterity' : {},
                'constitution' : {},
                'intelligence' : {},
                'wisdom' : {},
                'charisma' : {}
        }
        
        #Base Ability Score
        for key in self.abilities.keys():
            self.abilities[key]['score'] = self.data['abilities'][key]
            self.abilities[key]['isSaveProf'] = self.data['saveProficiency'][key]
        
            #Base Modifier
            self.abilities[key]['mod'] = math.floor( (self.abilities[key]['score'] - 10) / 2)
        
            #Save Modifier
            if (self.abilities[key]['isSaveProf']):
                self.abilities[key]['save'] = self.abilities[key]['mod'] + self.stats['profBonus']
            else:
                self.abilities[key]['save'] = self.abilities[key]['mod']
                
    def calculateSkills(self):
        
        #Create Base Dictionaries
        
        self.skills = {
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
        
        for key in self.skills.keys():
            baseKey = self.skills[key]['base']
            self.skills[key]['isCheckProf'] = self.data['checkProficiency'][key]
            
            if (self.skills[key]['isCheckProf']):
                self.skills[key]['check'] = self.abilities[baseKey]['mod'] + self.stats['profBonus']
            else:
                self.skills[key]['check'] = self.abilities[baseKey]['mod']
                
        self.stats['initiative'] = self.abilities['dexterity']['mod']
        self.stats['passivePerception'] = 10 + self.skills['perception']['check']
                