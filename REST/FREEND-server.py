#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import json
import freend

char_file_list = os.listdir('./db/char/')
char_list = []

for file in char_file_list:
    tempFile = open('db/char/'+file,'r+')
    tempString = tempFile.read()
    tempChar = json.loads(tempString)['character']
    if (tempChar['class'] == "Bard"):
        char_list.append(freend.Bard(tempChar))
    tempFile.close()
    

