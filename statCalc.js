function statCalc(data, spellData, itemData) {	
	
	//Calculated Return Data Structure
	calcData = {
		modifier : {},		
		bard : {},		
		check : {},		
		save : {},
		maxSpellSlots: {},
		spells : [],
		totalCurrency : {},
		inventory : [],
		classAbilities : []
	};
	
	//Bard - Jack of All Trades
	if (data.character.class = 'Bard') {
		if (data.character.level >= 2) { calcData.bard.jackOfAllTrades = true; }
	}

	//Total Currency
	calcData.totalCurrency = data.character.currency.platinum * 10.0;
	calcData.totalCurrency += data.character.currency.gold * 1.0;
	calcData.totalCurrency += data.character.currency.silver * 0.1;
	calcData.totalCurrency += data.character.currency.copper * 0.01;
	
	//TODO - Hard:
		//TODO - armorClass
		//TODO - encumberance


	//TODO - Big Data:
		//TODO - All Spells
		//TODO - All Cantrips
		//TODO - All Items
		//TODO - All Racial Abilities
		//TODO - All Background Abilities
	
	//Speed
	switch(data.character.race) {
		case 'Halfling':
		case 'Dwarf':
		case 'Gnome':
		case 'Halfling':
			calcData.speed = 25;
			break;
		case 'Dragonborn':
		case 'Elf':
		case 'Half-Elf':
		case 'Half-Orc':
		case 'Human':
		case 'Tiefling':
			calcData.speed = 30;
			break;
		default:
			calcData.speed = 25;
			break;
	}
			
	
	//Proficiency Bonus
	if (data.character.level <= 4) { calcData.proficiencyBonus = 2}
	else if (data.character.level <= 8) { calcData.proficiencyBonus = 3}
	else if (data.character.level <= 12) { calcData.proficiencyBonus = 4}
	else if (data.character.level <= 16) { calcData.proficiencyBonus = 5}
	else if (data.character.level <= 20) { calcData.proficiencyBonus = 6}
	else { calcData.proficiencyBonus = 6};

	calcData.halfProficiency = Math.floor(calcData.proficiencyBonus / 2);
		
	//Ability Modifiers
	calcData.modifier.strength = Math.floor((data.character.abilities.strength - 10) / 2);
	calcData.modifier.dexterity = Math.floor((data.character.abilities.dexterity - 10) / 2);
	calcData.modifier.constitution = Math.floor((data.character.abilities.constitution - 10) / 2);
	calcData.modifier.intelligence = Math.floor((data.character.abilities.intelligence - 10) / 2);
	calcData.modifier.wisdom = Math.floor((data.character.abilities.wisdom - 10) / 2);
	calcData.modifier.charisma = Math.floor((data.character.abilities.charisma - 10) / 2);
	
	//Initiative
	if (calcData.bard.jackOfAllTrades) {calcData.initiative = calcData.modifier.dexterity + calcData.halfProficiency; }
	else { calcData.initiative = calcData.modifier.wisdom; }
		
	//Passive Perception
	if (data.character.checkProficiency.perception) {calcData.passivePerception = 10 + calcData.modifier.wisdom + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.passivePerception = 10 + calcData.modifier.wisdom + calcData.halfProficiency; }
		else { calcData.passivePerception = 10 + calcData.modifier.wisdom; }
	};
	
	//Spell Attack Bonus & Spell Save DC
	switch(data.character.class) {
		case 'Barbarian':
		case 'Bard':
		case 'Paladin':
			calcData.spellAttackBonus = calcData.proficiencyBonus + calcData.modifier.charisma;
			calcData.spellSaveDC = 8 + calcData.proficiencyBonus + calcData.modifier.charisma;
			break;
		case 'Cleric':
		case 'Druid':
		case 'Ranger':
		case 'Sorcerer':
		case 'Warlock':
			calcData.spellAttackBonus = calcData.proficiencyBonus + calcData.modifier.wisdom;
			calcData.spellSaveDC = 8 + calcData.proficiencyBonus + calcData.modifier.wisdom;
			break;
		case 'Wizard':
			calcData.spellAttackBonus = calcData.proficiencyBonus + calcData.modifier.intelligence;
			calcData.spellSaveDC = 8 + calcData.proficiencyBonus + calcData.modifier.intelligence;
			break;
		case 'Fighter': //TODO - Eldritch Knight Archetype
		case 'Rogue': //TODO - Arcane Trickster Archetype
		case 'Monk':
		default:
			calcData.spellAttackBonus = 0;
			calcData.spellSaveDC = 0;
		
	}
	//spellSaveDC
	
	//Ability Checks
	if (data.character.checkProficiency.strength) {calcData.check.strength = calcData.modifier.strength + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.strength = calcData.modifier.strength + calcData.halfProficiency; }
		else { calcData.check.strength = calcData.modifier.strength; }
	};
	
	if (data.character.checkProficiency.dexterity) { calcData.check.dexterity = calcData.modifier.dexterity + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.dexterity = calcData.modifier.dexterity + calcData.halfProficiency; }
		else { calcData.check.dexterity = calcData.modifier.dexterity; }
	};
	
	if (data.character.checkProficiency.constitution) { calcData.check.constitution = calcData.modifier.constitution + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.constitution = calcData.modifier.constitution + calcData.halfProficiency; }
		else { calcData.check.constitution = calcData.modifier.constitution; }
	};
	
	if (data.character.checkProficiency.intelligence) {calcData.check.intelligence = calcData.modifier.intelligence + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.intelligence = calcData.modifier.intelligence + calcData.halfProficiency; }
		else { calcData.check.intelligence = calcData.modifier.intelligence; }
	};
	
	if (data.character.checkProficiency.wisdom) {calcData.check.wisdom = calcData.modifier.wisdom + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.wisdom = calcData.modifier.wisdom + calcData.halfProficiency; }
		else { calcData.check.wisdom = calcData.modifier.wisdom; }
	};
	
	if (data.character.checkProficiency.charisma) {calcData.check.charisma = calcData.modifier.charisma + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.charisma = calcData.modifier.charisma + calcData.halfProficiency; }
		else { calcData.check.charisma = calcData.modifier.charisma; }
	};
	
	//Skill Checks
	if (data.character.checkProficiency.acrobatics) {
		calcData.check.acrobatics = calcData.modifier.dexterity + calcData.proficiencyBonus;
		if (data.character.bard.expertise.acrobatics) {calcData.check.acrobatics += calcData.proficiencyBonus;}
	}
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.acrobatics = calcData.modifier.dexterity + calcData.halfProficiency; }
		else { calcData.check.acrobatics = calcData.modifier.dexterity; }
	};
	
	if (data.character.checkProficiency.animalHandling) { 
		calcData.check.animalHandling = calcData.modifier.wisdom + calcData.proficiencyBonus;
		if (data.character.bard.expertise.animalHandling) {calcData.check.animalHandling += calcData.proficiencyBonus;}
	}
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.animalHandling = calcData.modifier.wisdom + calcData.halfProficiency; }
		else { calcData.check.animalHandling = calcData.modifier.wisdom; }
	};
	
	if (data.character.checkProficiency.arcana) {
		calcData.check.arcana = calcData.modifier.intelligence + calcData.proficiencyBonus;
		if (data.character.bard.expertise.arcana) {calcData.check.arcana += calcData.proficiencyBonus;}
	}
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.arcana = calcData.modifier.intelligence + calcData.halfProficiency; }
		else { calcData.check.arcana = calcData.modifier.intelligence; }
	};
	
	if (data.character.checkProficiency.athletics) {
		calcData.check.athletics = calcData.modifier.strength + calcData.proficiencyBonus; 
		if (data.character.bard.expertise.athletics) {calcData.check.athletics += calcData.proficiencyBonus;}
	}
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.athletics = calcData.modifier.strength + calcData.halfProficiency; }
		else { calcData.check.athletics = calcData.modifier.strength; }
	};
	
	if (data.character.checkProficiency.deception) {
		calcData.check.deception = calcData.modifier.charisma + calcData.proficiencyBonus; 
		if (data.character.bard.expertise.deception) {calcData.check.deception += calcData.proficiencyBonus;}
	}
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.deception = calcData.modifier.charisma + calcData.halfProficiency; }
		else { calcData.check.deception = calcData.modifier.charisma; }
	};
	
	if (data.character.checkProficiency.history) {
		calcData.check.history = calcData.modifier.intelligence + calcData.proficiencyBonus; 
		if (data.character.bard.expertise.history) {calcData.check.history += calcData.proficiencyBonus;}
	}
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.history = calcData.modifier.intelligence + calcData.halfProficiency; }
		else { calcData.check.history = calcData.modifier.intelligence; }
	};
	
	if (data.character.checkProficiency.insight) {
		calcData.check.insight = calcData.modifier.wisdom + calcData.proficiencyBonus; 
		if (data.character.bard.expertise.insight) {calcData.check.insight += calcData.proficiencyBonus;}
	}
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.insight = calcData.modifier.wisdom + calcData.halfProficiency; }
		else { calcData.check.insight = calcData.modifier.wisdom; }
	};
	
	if (data.character.checkProficiency.intimidation) {
		calcData.check.intimidation = calcData.modifier.charisma + calcData.proficiencyBonus; 
		if (data.character.bard.expertise.intimidation) {calcData.check.intimidation += calcData.proficiencyBonus;}
	}
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.intimidation = calcData.modifier.charisma + calcData.halfProficiency; }
		else { calcData.check.intimidation = calcData.modifier.charisma; }
	};
	
	if (data.character.checkProficiency.investigation) {
		calcData.check.investigation = calcData.modifier.intelligence + calcData.proficiencyBonus; 
		if (data.character.bard.expertise.investigation) {calcData.check.investigation += calcData.proficiencyBonus;}
	}
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.investigation = calcData.modifier.intelligence + calcData.halfProficiency; }
		else { calcData.check.investigation = calcData.modifier.intelligence; }
	};
	
	if (data.character.checkProficiency.medicine) {
		calcData.check.medicine = calcData.modifier.wisdom + calcData.proficiencyBonus; 
		if (data.character.bard.expertise.medicine) {calcData.check.medicine += calcData.proficiencyBonus;}
	}
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.medicine = calcData.modifier.wisdom + calcData.halfProficiency; }
		else { calcData.check.medicine = calcData.modifier.wisdom; }
	};
	
	if (data.character.checkProficiency.nature) {
		calcData.check.nature = calcData.modifier.intelligence + calcData.proficiencyBonus; 
		if (data.character.bard.expertise.nature) {calcData.check.nature += calcData.proficiencyBonus;}
	}
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.nature = calcData.modifier.intelligence + calcData.halfProficiency; }
		else { calcData.check.nature = calcData.modifier.intelligence; }
	};
	
	if (data.character.checkProficiency.perception) {
		calcData.check.perception = calcData.modifier.wisdom + calcData.proficiencyBonus; 
		if (data.character.bard.expertise.perception) {calcData.check.perception += calcData.proficiencyBonus;}
	}
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.perception = calcData.modifier.wisdom + calcData.halfProficiency; }
		else { calcData.check.perception = calcData.modifier.wisdom; }
	};
	
	if (data.character.checkProficiency.performance) {
		calcData.check.performance = calcData.modifier.charisma + calcData.proficiencyBonus; 
		if (data.character.bard.expertise.performance) {calcData.check.performance += calcData.proficiencyBonus;}
	}
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.performance = calcData.modifier.charisma + calcData.halfProficiency; }
		else { calcData.check.performance = calcData.modifier.charisma; }
	};
	
	if (data.character.checkProficiency.persuasion) {
		calcData.check.persuasion = calcData.modifier.charisma + calcData.proficiencyBonus; 
		if (data.character.bard.expertise.persuasion) {calcData.check.persuasion += calcData.proficiencyBonus;}
	}
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.persuasion = calcData.modifier.charisma + calcData.halfProficiency; }
		else { calcData.check.persuasion = calcData.modifier.charisma; }
	};
	
	if (data.character.checkProficiency.religion) {
		calcData.check.religion = calcData.modifier.intelligence + calcData.proficiencyBonus; 
		if (data.character.bard.expertise.religion) {calcData.check.religion += calcData.proficiencyBonus;}
	}
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.religion = calcData.modifier.intelligence + calcData.halfProficiency; }
		else { calcData.check.religion = calcData.modifier.intelligence; }
	};
	
	if (data.character.checkProficiency.sleight) {
		calcData.check.sleight = calcData.modifier.dexterity + calcData.proficiencyBonus; 
		if (data.character.bard.expertise.sleight) {calcData.check.sleight += calcData.proficiencyBonus;}
	}
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.sleight = calcData.modifier.dexterity + calcData.halfProficiency; }
		else { calcData.check.sleight = calcData.modifier.dexterity; }
	};
	
	if (data.character.checkProficiency.stealth) {
		calcData.check.stealth = calcData.modifier.dexterity + calcData.proficiencyBonus; 
		if (data.character.bard.expertise.stealth) {calcData.check.stealth += calcData.proficiencyBonus;}
	}
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.stealth = calcData.modifier.dexterity + calcData.halfProficiency; }
		else { calcData.check.stealth = calcData.modifier.dexterity; }
	};
	
	if (data.character.checkProficiency.survival) {
		calcData.check.survival = calcData.modifier.wisdom + calcData.proficiencyBonus; 
		if (data.character.bard.expertise.survival) {calcData.check.survival += calcData.proficiencyBonus;}
	}
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.survival = calcData.modifier.wisdom + calcData.halfProficiency; }
		else { calcData.check.survival = calcData.modifier.wisdom; }
	};
		
	//Saving Throws
	if (data.character.saveProficiency.strength) { calcData.save.strength = calcData.modifier.strength+ calcData.proficiencyBonus; }
	else { calcData.save.strength = calcData.modifier.strength; };
	
	if (data.character.saveProficiency.dexterity) { calcData.save.dexterity = calcData.modifier.dexterity + calcData.proficiencyBonus; }
	else { calcData.save.dexterity = calcData.modifier.dexterity; };
	
	if (data.character.saveProficiency.constitution) { calcData.save.constitution = calcData.modifier.constitution + calcData.proficiencyBonus; }
	else { calcData.save.constitution = calcData.modifier.constitution; };
	
	if (data.character.saveProficiency.intelligence) { calcData.save.intelligence = calcData.modifier.intelligence + calcData.proficiencyBonus; }
	else { calcData.save.intelligence = calcData.modifier.intelligence; };
	
	if (data.character.saveProficiency.wisdom) { calcData.save.wisdom = calcData.modifier.wisdom + calcData.proficiencyBonus; }
	else { calcData.save.wisdom = calcData.modifier.wisdom; };
	
	if (data.character.saveProficiency.charisma) {	calcData.save.charisma = calcData.modifier.charisma+ calcData.proficiencyBonus; }
	else { calcData.save.charisma = calcData.modifier.charisma; };

	//Bard - Max Bardic Inspiration
	if (data.character.class = 'Bard') {
		calcData.bard.maxBardicInspiration = calcData.modifier.charisma;
	}

	//Bard - Bardic Inspiration Die
	if (data.character.class = 'Bard') {
		if (data.character.level < 5) {calcData.bard.bardicInspirationDie = "d6";}
		else if (data.character.level < 10) {calcData.bard.bardicInspirationDie = "d8";}
		else if (data.character.level < 15) {calcData.bard.bardicInspirationDie = "d10";}
		else {calcData.bard.bardicInspirationDie = "d12";}
	}
	
	//Spells
	for (var i = 0; i < data.character.spells.length; i++) {
		for (var j = 0; j < spellData.length; j++) {
			if (spellData[j].spell == data.character.spells[i]) {
				calcData.spells.push(spellData[j]);
			}
		}
	}

	//TODO - Cantrips
	
	//Inventory
	//TODO - Have this just push each full item object into the calcData array, and then loop through and calculate cost & weight
	for (var i = 0; i < data.character.inventory.length; i++) {
		for (var j = 0; j < itemData.length; j++) {
			if (itemData[j].item == data.character.inventory[i].item) {
				tempItem = {
					item : itemData[j].item,
					type : itemData[j].type,
					subtype : itemData[j].subtype,
					qty : data.character.inventory[i].qty,
					equipped : data.character.inventory[i].equipped,
					unitCost : itemData[j].cost,
					unitWeight : itemData[j].weight,
					cost : itemData[j].cost * data.character.inventory[i].qty,
					weight : itemData[j].weight * data.character.inventory[i].qty
				}
				if (tempItem.type == 'Weapon') {
					tempItem.damage = itemData[j].damage;
					tempItem.properties = itemData[j].properties;
				}
				if (tempItem.type == 'Armor') {
					tempItem.armorClass = itemData[j].armorClass;
					tempItem.stealth = itemData[j].stealth;
				}
				calcData.inventory.push(tempItem);
			}
		}
	}
	
	//Carrying Capacity
	calcData.carryingCapacity = data.character.abilities.strength * 15;
	
	//Carrying Weight
	calcData.carryingWeight = 0;
	for (var i=0; i < calcData.inventory.length; i++) {
		calcData.carryingWeight += calcData.inventory[i].weight;
	}

	//Class Abilities
	if (data.character.class = 'Bard') {
		tempAbility = {};
		tempAbility.name = "Bardic Inspiration";
		tempAbility.description = "You can inspire others through stirring words or music. To do so, you use a Bonus Action on Your Turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, Attack roll, or saving throw it makes. The creature can wait until after it rolls The D20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a Long Rest. Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.";
		calcData.classAbilities.push(tempAbility);

		if (data.character.level >= 2) {
			tempAbility = {};
			tempAbility.name = "Jack of All Trades";
			tempAbility.description = "Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus.";
			calcData.classAbilities.push(tempAbility);
			
			tempAbility = {};
			tempAbility.name = "Song of Rest";
			tempAbility.description = "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a Short Rest. If you or any friendly creatures who can hear your Performance regain Hit Points by spending Hit Dice at the end of the Short Rest, each of those creatures regains an extra 1d6 Hit Points. The extra Hit Points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.";
			calcData.classAbilities.push(tempAbility);
		}

		if (data.character.level >= 3) {
			tempAbility = {};
			tempAbility.name = "Expertise";
			tempAbility.description = "At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 10th level, you can choose another two skill proficiencies to gain this benefit.";
			calcData.classAbilities.push(tempAbility);

			tempAbility = {};
			tempAbility.name = "Cutting Words";
			tempAbility.description = "Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an Attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature’s roll. You can choose to use this feature after the creature makes its roll, but before the GM determines whether the Attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can’t hear you or if it’s immune to being Charmed.";
			calcData.classAbilities.push(tempAbility);
		}
	}

	//Max Spell Slots
	if (data.character.class == "Bard") {
		if (data.character.level == 1) {
			calcData.maxSpellSlots.level1 = 2;
			calcData.maxSpellSlots.level2 = 0;
			calcData.maxSpellSlots.level3 = 0;
			calcData.maxSpellSlots.level4 = 0;
			calcData.maxSpellSlots.level5 = 0;
			calcData.maxSpellSlots.level6 = 0;
			calcData.maxSpellSlots.level7 = 0;
			calcData.maxSpellSlots.level8 = 0;
			calcData.maxSpellSlots.level9 = 0;
		}

		if (data.character.level == 2) {
			calcData.maxSpellSlots.level1 = 3;
			calcData.maxSpellSlots.level2 = 0;
			calcData.maxSpellSlots.level3 = 0;
			calcData.maxSpellSlots.level4 = 0;
			calcData.maxSpellSlots.level5 = 0;
			calcData.maxSpellSlots.level6 = 0;
			calcData.maxSpellSlots.level7 = 0;
			calcData.maxSpellSlots.level8 = 0;
			calcData.maxSpellSlots.level9 = 0;
		}

		if (data.character.level == 3) {
			calcData.maxSpellSlots.level1 = 4;
			calcData.maxSpellSlots.level2 = 2;
			calcData.maxSpellSlots.level3 = 0;
			calcData.maxSpellSlots.level4 = 0;
			calcData.maxSpellSlots.level5 = 0;
			calcData.maxSpellSlots.level6 = 0;
			calcData.maxSpellSlots.level7 = 0;
			calcData.maxSpellSlots.level8 = 0;
			calcData.maxSpellSlots.level9 = 0;
		}

		if (data.character.level == 4) {
			calcData.maxSpellSlots.level1 = 4;
			calcData.maxSpellSlots.level2 = 3;
			calcData.maxSpellSlots.level3 = 0;
			calcData.maxSpellSlots.level4 = 0;
			calcData.maxSpellSlots.level5 = 0;
			calcData.maxSpellSlots.level6 = 0;
			calcData.maxSpellSlots.level7 = 0;
			calcData.maxSpellSlots.level8 = 0;
			calcData.maxSpellSlots.level9 = 0;
		}

		if (data.character.level == 5) {
			calcData.maxSpellSlots.level1 = 4;
			calcData.maxSpellSlots.level2 = 3;
			calcData.maxSpellSlots.level3 = 2;
			calcData.maxSpellSlots.level4 = 0;
			calcData.maxSpellSlots.level5 = 0;
			calcData.maxSpellSlots.level6 = 0;
			calcData.maxSpellSlots.level7 = 0;
			calcData.maxSpellSlots.level8 = 0;
			calcData.maxSpellSlots.level9 = 0;
		}

		if (data.character.level == 6) {
			calcData.maxSpellSlots.level1 = 4;
			calcData.maxSpellSlots.level2 = 3;
			calcData.maxSpellSlots.level3 = 3;
			calcData.maxSpellSlots.level4 = 0;
			calcData.maxSpellSlots.level5 = 0;
			calcData.maxSpellSlots.level6 = 0;
			calcData.maxSpellSlots.level7 = 0;
			calcData.maxSpellSlots.level8 = 0;
			calcData.maxSpellSlots.level9 = 0;
		}

		if (data.character.level == 7) {
			calcData.maxSpellSlots.level1 = 4;
			calcData.maxSpellSlots.level2 = 3;
			calcData.maxSpellSlots.level3 = 3;
			calcData.maxSpellSlots.level4 = 1;
			calcData.maxSpellSlots.level5 = 0;
			calcData.maxSpellSlots.level6 = 0;
			calcData.maxSpellSlots.level7 = 0;
			calcData.maxSpellSlots.level8 = 0;
			calcData.maxSpellSlots.level9 = 0;
		}

		if (data.character.level == 8) {
			calcData.maxSpellSlots.level1 = 4;
			calcData.maxSpellSlots.level2 = 3;
			calcData.maxSpellSlots.level3 = 3;
			calcData.maxSpellSlots.level4 = 2;
			calcData.maxSpellSlots.level5 = 0;
			calcData.maxSpellSlots.level6 = 0;
			calcData.maxSpellSlots.level7 = 0;
			calcData.maxSpellSlots.level8 = 0;
			calcData.maxSpellSlots.level9 = 0;
		}

		if (data.character.level == 9) {
			calcData.maxSpellSlots.level1 = 4;
			calcData.maxSpellSlots.level2 = 3;
			calcData.maxSpellSlots.level3 = 3;
			calcData.maxSpellSlots.level4 = 3;
			calcData.maxSpellSlots.level5 = 1;
			calcData.maxSpellSlots.level6 = 0;
			calcData.maxSpellSlots.level7 = 0;
			calcData.maxSpellSlots.level8 = 0;
			calcData.maxSpellSlots.level9 = 0;
		}

		if (data.character.level == 10) {
			calcData.maxSpellSlots.level1 = 4;
			calcData.maxSpellSlots.level2 = 3;
			calcData.maxSpellSlots.level3 = 3;
			calcData.maxSpellSlots.level4 = 3;
			calcData.maxSpellSlots.level5 = 2;
			calcData.maxSpellSlots.level6 = 0;
			calcData.maxSpellSlots.level7 = 0;
			calcData.maxSpellSlots.level8 = 0;
			calcData.maxSpellSlots.level9 = 0;
		}

		if (data.character.level == 11) {
			calcData.maxSpellSlots.level1 = 4;
			calcData.maxSpellSlots.level2 = 3;
			calcData.maxSpellSlots.level3 = 3;
			calcData.maxSpellSlots.level4 = 3;
			calcData.maxSpellSlots.level5 = 2;
			calcData.maxSpellSlots.level6 = 1;
			calcData.maxSpellSlots.level7 = 0;
			calcData.maxSpellSlots.level8 = 0;
			calcData.maxSpellSlots.level9 = 0;
		}

		if (data.character.level == 12) {
			calcData.maxSpellSlots.level1 = 4;
			calcData.maxSpellSlots.level2 = 3;
			calcData.maxSpellSlots.level3 = 3;
			calcData.maxSpellSlots.level4 = 3;
			calcData.maxSpellSlots.level5 = 2;
			calcData.maxSpellSlots.level6 = 1;
			calcData.maxSpellSlots.level7 = 0;
			calcData.maxSpellSlots.level8 = 0;
			calcData.maxSpellSlots.level9 = 0;
		}

		if (data.character.level == 13) {
			calcData.maxSpellSlots.level1 = 4;
			calcData.maxSpellSlots.level2 = 3;
			calcData.maxSpellSlots.level3 = 3;
			calcData.maxSpellSlots.level4 = 3;
			calcData.maxSpellSlots.level5 = 2;
			calcData.maxSpellSlots.level6 = 1;
			calcData.maxSpellSlots.level7 = 1;
			calcData.maxSpellSlots.level8 = 0;
			calcData.maxSpellSlots.level9 = 0;
		}

		if (data.character.level == 14) {
			calcData.maxSpellSlots.level1 = 4;
			calcData.maxSpellSlots.level2 = 3;
			calcData.maxSpellSlots.level3 = 3;
			calcData.maxSpellSlots.level4 = 3;
			calcData.maxSpellSlots.level5 = 2;
			calcData.maxSpellSlots.level6 = 1;
			calcData.maxSpellSlots.level7 = 1;
			calcData.maxSpellSlots.level8 = 0;
			calcData.maxSpellSlots.level9 = 0;
		}

		if (data.character.level == 15) {
			calcData.maxSpellSlots.level1 = 4;
			calcData.maxSpellSlots.level2 = 3;
			calcData.maxSpellSlots.level3 = 3;
			calcData.maxSpellSlots.level4 = 3;
			calcData.maxSpellSlots.level5 = 2;
			calcData.maxSpellSlots.level6 = 1;
			calcData.maxSpellSlots.level7 = 1;
			calcData.maxSpellSlots.level8 = 1;
			calcData.maxSpellSlots.level9 = 0;
		}

		if (data.character.level == 16) {
			calcData.maxSpellSlots.level1 = 4;
			calcData.maxSpellSlots.level2 = 3;
			calcData.maxSpellSlots.level3 = 3;
			calcData.maxSpellSlots.level4 = 3;
			calcData.maxSpellSlots.level5 = 2;
			calcData.maxSpellSlots.level6 = 1;
			calcData.maxSpellSlots.level7 = 1;
			calcData.maxSpellSlots.level8 = 1;
			calcData.maxSpellSlots.level9 = 0;
		}

		if (data.character.level == 17) {
			calcData.maxSpellSlots.level1 = 4;
			calcData.maxSpellSlots.level2 = 3;
			calcData.maxSpellSlots.level3 = 3;
			calcData.maxSpellSlots.level4 = 3;
			calcData.maxSpellSlots.level5 = 2;
			calcData.maxSpellSlots.level6 = 1;
			calcData.maxSpellSlots.level7 = 1;
			calcData.maxSpellSlots.level8 = 1;
			calcData.maxSpellSlots.level9 = 1;
		}

		if (data.character.level == 18) {
			calcData.maxSpellSlots.level1 = 4;
			calcData.maxSpellSlots.level2 = 3;
			calcData.maxSpellSlots.level3 = 3;
			calcData.maxSpellSlots.level4 = 3;
			calcData.maxSpellSlots.level5 = 3;
			calcData.maxSpellSlots.level6 = 1;
			calcData.maxSpellSlots.level7 = 1;
			calcData.maxSpellSlots.level8 = 1;
			calcData.maxSpellSlots.level9 = 1;
		}

		if (data.character.level == 19) {
			calcData.maxSpellSlots.level1 = 4;
			calcData.maxSpellSlots.level2 = 3;
			calcData.maxSpellSlots.level3 = 3;
			calcData.maxSpellSlots.level4 = 3;
			calcData.maxSpellSlots.level5 = 2;
			calcData.maxSpellSlots.level6 = 2;
			calcData.maxSpellSlots.level7 = 1;
			calcData.maxSpellSlots.level8 = 1;
			calcData.maxSpellSlots.level9 = 1;
		}

		if (data.character.level == 20) {
			calcData.maxSpellSlots.level1 = 4;
			calcData.maxSpellSlots.level2 = 3;
			calcData.maxSpellSlots.level3 = 3;
			calcData.maxSpellSlots.level4 = 3;
			calcData.maxSpellSlots.level5 = 2;
			calcData.maxSpellSlots.level6 = 2;
			calcData.maxSpellSlots.level7 = 2;
			calcData.maxSpellSlots.level8 = 1;
			calcData.maxSpellSlots.level9 = 1;
		}
	}
	
	return(calcData);
}	

module.exports = statCalc;
