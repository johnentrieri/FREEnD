#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Nov  2 00:28:01 2019

@author: pi
"""

from freend import Character
import math

class Bard(Character):
    def __init__(self,charData,campaign):
        super(Bard,self).__init__(charData,campaign)

        self.buildCharacter() 

    def buildCharacter(self):
        super(Bard,self).buildCharacter()

        self.performSpellCalculations()
        self.bardicInspiration()
        self.jackOfAllTrades()
        self.songOfRest()
        self.expertise()
        self.college()
        
    def performSpellCalculations(self):
        self.calculateMaxSpellSlots()
        self.calculateSpellAttackBonus()
        self.calculateSpellSaveDC()
        
    def calculateSpellAttackBonus(self):
        self.stats['spellAttackBonus'] = self.stats['abilities']['charisma']['mod'] + self.stats['profBonus']
    
    def calculateSpellSaveDC(self):
        self.stats['spellSaveDC'] = 8 + self.stats['abilities']['charisma']['mod'] + self.stats['profBonus']
    
    def calculateMaxSpellSlots(self):
        if(self.info['level'] == 1):
            self.stats['maxSpellSlots'] = [2,0,0,0,0,0,0,0,0]
        elif (self.info['level'] == 2):
            self.stats['maxSpellSlots'] = [3,0,0,0,0,0,0,0,0]
        elif (self.info['level'] == 3):
            self.stats['maxSpellSlots'] = [4,2,0,0,0,0,0,0,0]
        elif (self.info['level'] == 4):
            self.stats['maxSpellSlots'] = [4,3,0,0,0,0,0,0,0]
        elif (self.info['level'] == 5):
            self.stats['maxSpellSlots'] = [4,3,2,0,0,0,0,0,0]
        elif (self.info['level'] == 6):
            self.stats['maxSpellSlots'] = [4,3,3,0,0,0,0,0,0]
        elif (self.info['level'] == 7):
            self.stats['maxSpellSlots'] = [4,3,3,1,0,0,0,0,0]
        elif (self.info['level'] == 8):
            self.stats['maxSpellSlots'] = [4,3,3,2,0,0,0,0,0]
        elif (self.info['level'] == 9):
            self.stats['maxSpellSlots'] = [4,3,3,3,1,0,0,0,0]
        elif (self.info['level'] == 10):
            self.stats['maxSpellSlots'] = [4,3,3,3,2,0,0,0,0]
        elif (self.info['level'] == 11):
            self.stats['maxSpellSlots'] = [4,3,3,3,2,1,0,0,0]
        elif (self.info['level'] == 12):
            self.stats['maxSpellSlots'] = [4,3,3,3,2,1,0,0,0]
        elif (self.info['level'] == 13):
            self.stats['maxSpellSlots'] = [4,3,3,3,2,1,1,0,0]
        elif (self.info['level'] == 14):
            self.stats['maxSpellSlots'] = [4,3,3,3,2,1,1,0,0]
        elif (self.info['level'] == 15):
            self.stats['maxSpellSlots'] = [4,3,3,3,2,1,1,1,0]
        elif (self.info['level'] == 16):
            self.stats['maxSpellSlots'] = [4,3,3,3,2,1,1,1,0]
        elif (self.info['level'] == 17):
            self.stats['maxSpellSlots'] = [4,3,3,3,2,1,1,1,1]
        elif (self.info['level'] == 18):
            self.stats['maxSpellSlots'] = [4,3,3,3,3,1,1,1,1]
        elif (self.info['level'] == 19):
            self.stats['maxSpellSlots'] = [4,3,3,3,3,2,1,1,1]
        elif (self.info['level'] == 20):
            self.stats['maxSpellSlots'] = [4,3,3,3,3,2,2,1,1]
            
    def bardicInspiration(self):        
        tempAbility = {}
        tempAbility['name'] = "Bardic Inspiration"
        tempAbility['description'] = "You can inspire others through stirring words or music. To do so, you use a Bonus Action on Your Turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, Attack roll, or saving throw it makes. The creature can wait until after it rolls The D20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a Long Rest. Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
        self.classData['classAbilities'].append(tempAbility)
        
        self.classData['maxBardicInspirationDie'] = self.stats['abilities']['charisma']['mod']
        self.classData['bardicInspirationDie'] = self.inputData['bard']['bardicInspiration']
        
        if (self.info['level'] < 5):
            self.classData['bardicInspirationDieType'] = "1d6"
        elif (self.info['level'] < 10):
            self.classData['bardicInspirationDieType'] = "1d8"
        elif (self.info['level'] < 15):
            self.classData['bardicInspirationDieType'] = "1d10"
        else:
            self.classData['bardicInspirationDieType'] = "1d12"
            
    def jackOfAllTrades(self):
        if (self.info['level'] >= 2):
            tempAbility = {}
            tempAbility['name'] = "Jack of All Trades"
            tempAbility['description'] = "Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus."
            self.classData['classAbilities'].append(tempAbility)
            
            halfProf = math.floor(self.stats['profBonus']/2)
            
            for key in self.stats['abilities'].keys():
                self.stats['abilities'][key]['check'] += halfProf
                
            for key in self.stats['skills'].keys():
                if (not(self.stats['skills'][key]['isCheckProf'])):
                    self.stats['skills'][key]['check'] += halfProf
            
            self.stats['initiative'] = self.stats['abilities']['dexterity']['check']
            self.stats['passivePerception'] = 10 + self.stats['skills']['perception']['check']
            
    def songOfRest(self):
        if (self.info['level'] >= 2):
            tempAbility = {}
            tempAbility['name'] = "Song of Rest"
            tempAbility['description'] = "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a Short Rest. If you or any friendly creatures who can hear your Performance regain Hit Points by spending Hit Dice at the end of the Short Rest, each of those creatures regains an extra 1d6 Hit Points. The extra Hit Points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
            self.classData['classAbilities'].append(tempAbility)
        
    def expertise(self):
        if (self.info['level'] >= 3):
            tempAbility = {}
            tempAbility['name'] = "Expertise"
            tempAbility['description'] = "At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 10th level, you can choose another two skill proficiencies to gain this benefit."
            self.classData['classAbilities'].append(tempAbility)
            
            for key in self.stats['skills'].keys():
                if (self.stats['skills'][key]['isCheckProf']):
                    if(self.inputData['bard']['expertise'][key]):
                        self.stats['skills'][key]['check'] += self.stats['profBonus']
    
    def college(self):
        if (self.info['level'] >= 3):
            self.classData['college'] = self.inputData['bard']['college']
            
            if (self.classData['college'] == "Lore"):
                #self.bonusProficiencies
                self.cuttingWords()
                #self.additionalMagicalSecrets
                #self.peerlessSkill
       
    def cuttingWords(self):
        if (self.info['level'] >= 3):
            tempAbility = {}
            tempAbility['name'] = "Cutting Words"
            tempAbility['description'] = "Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an Attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature’s roll. You can choose to use this feature after the creature makes its roll, but before the GM determines whether the Attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can’t hear you or if it’s immune to being Charmed."
            self.classData['classAbilities'].append(tempAbility)      
        
        
        
        
        