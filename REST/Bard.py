#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Nov  2 00:28:01 2019

@author: pi
"""

from Character import Character

class Bard(Character):
    def __init__(self,charData):
        super().__init__(charData)
        self.calculateMaxSpellSlots()
        self.calculateSpellAttackBonus()
        self.calculateSpellSaveDC()
        
    def calculateSpellAttackBonus(self):
        self.stats['spellAttackBonus'] = self.abilities['charisma']['mod'] + self.stats['profBonus']
    
    def calculateSpellSaveDC(self):
        self.stats['spellSaveDC'] = 8 + self.abilities['charisma']['mod'] + self.stats['profBonus']
    
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