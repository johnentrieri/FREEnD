function statCalc(data, spellData, itemData) {	
	
	//Calculated Return Data Structure
	calcData = {
		modifier : {},		
		bard : {},		
		check : {},		
		save : {},
		maxSpellSlots: {},
		spells : [],
		inventory : []
	};
	
	//Bard-Specific
	if (data.character.class = 'Bard') {
		if (data.character.level >= 2) { calcData.bard.jackOfAllTrades = true; }
		//TODO - MaxBardicInspiration
		
	}
	//TODO - Easy:
		//TODO - maxSpellSlots
		//TODO - totalCurrency
	
	//TODO - Hard:
		//TODO - armorClass
		//TODO - encumberance
		//TODO - spells
		//TODO - cantrips
	
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
		
	//Ability Modifiers
	calcData.modifier.strength = Math.floor((data.character.abilities.strength - 10) / 2);
	calcData.modifier.dexterity = Math.floor((data.character.abilities.dexterity - 10) / 2);
	calcData.modifier.constitution = Math.floor((data.character.abilities.constitution - 10) / 2);
	calcData.modifier.intelligence = Math.floor((data.character.abilities.intelligence - 10) / 2);
	calcData.modifier.wisdom = Math.floor((data.character.abilities.wisdom - 10) / 2);
	calcData.modifier.charisma = Math.floor((data.character.abilities.charisma - 10) / 2);
	
	//Initiative
	if (calcData.bard.jackOfAllTrades) {calcData.initiative = calcData.modifier.dexterity + (calcData.proficiencyBonus/2); }
	else { calcData.initiative = calcData.modifier.wisdom; }
		
	//Passive Perception
	if (data.character.checkProficiency.perception) {calcData.passivePerception = 10 + calcData.modifier.wisdom + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.passivePerception = 10 + calcData.modifier.wisdom + (calcData.proficiencyBonus/2); }
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
		if (calcData.bard.jackOfAllTrades) {calcData.check.strength = calcData.modifier.strength + (calcData.proficiencyBonus/2); }
		else { calcData.check.strength = calcData.modifier.strength; }
	};
	
	if (data.character.checkProficiency.dexterity) { calcData.check.dexterity = calcData.modifier.dexterity + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.dexterity = calcData.modifier.dexterity + (calcData.proficiencyBonus/2); }
		else { calcData.check.dexterity = calcData.modifier.dexterity; }
	};
	
	if (data.character.checkProficiency.constitution) { calcData.check.constitution = calcData.modifier.constitution + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.constitution = calcData.modifier.constitution + (calcData.proficiencyBonus/2); }
		else { calcData.check.constitution = calcData.modifier.constitution; }
	};
	
	if (data.character.checkProficiency.intelligence) {calcData.check.intelligence = calcData.modifier.intelligence + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.intelligence = calcData.modifier.intelligence + (calcData.proficiencyBonus/2); }
		else { calcData.check.intelligence = calcData.modifier.intelligence; }
	};
	
	if (data.character.checkProficiency.wisdom) {calcData.check.wisdom = calcData.modifier.wisdom + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.wisdom = calcData.modifier.wisdom + (calcData.proficiencyBonus/2); }
		else { calcData.check.wisdom = calcData.modifier.wisdom; }
	};
	
	if (data.character.checkProficiency.charisma) {calcData.check.charisma = calcData.modifier.charisma + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.charisma = calcData.modifier.charisma + (calcData.proficiencyBonus/2); }
		else { calcData.check.charisma = calcData.modifier.charisma; }
	};
	
	//Skill Checks
	if (data.character.checkProficiency.acrobatics) { calcData.check.acrobatics = calcData.modifier.dexterity + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.acrobatics = calcData.modifier.dexterity + (calcData.proficiencyBonus/2); }
		else { calcData.check.acrobatics = calcData.modifier.dexterity; }
	};
	
	if (data.character.checkProficiency.animalHandling) { calcData.check.animalHandling = calcData.modifier.wisdom + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.animalHandling = calcData.modifier.wisdom + (calcData.proficiencyBonus/2); }
		else { calcData.check.animalHandling = calcData.modifier.wisdom; }
	};
	
	if (data.character.checkProficiency.arcana) {calcData.check.arcana = calcData.modifier.intelligence + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.arcana = calcData.modifier.intelligence + (calcData.proficiencyBonus/2); }
		else { calcData.check.arcana = calcData.modifier.intelligence; }
	};
	
	if (data.character.checkProficiency.athletics) {calcData.check.athletics = calcData.modifier.strength + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.athletics = calcData.modifier.strength + (calcData.proficiencyBonus/2); }
		else { calcData.check.athletics = calcData.modifier.strength; }
	};
	
	if (data.character.checkProficiency.deception) {calcData.check.deception = calcData.modifier.charisma + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.deception = calcData.modifier.charisma + (calcData.proficiencyBonus/2); }
		else { calcData.check.deception = calcData.modifier.charisma; }
	};
	
	if (data.character.checkProficiency.history) {calcData.check.history = calcData.modifier.intelligence + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.history = calcData.modifier.intelligence + (calcData.proficiencyBonus/2); }
		else { calcData.check.history = calcData.modifier.intelligence; }
	};
	
	if (data.character.checkProficiency.insight) {calcData.check.insight = calcData.modifier.wisdom + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.insight = calcData.modifier.wisdom + (calcData.proficiencyBonus/2); }
		else { calcData.check.insight = calcData.modifier.wisdom; }
	};
	
	if (data.character.checkProficiency.intimidation) {calcData.check.intimidation = calcData.modifier.charisma + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.intimidation = calcData.modifier.charisma + (calcData.proficiencyBonus/2); }
		else { calcData.check.intimidation = calcData.modifier.charisma; }
	};
	
	if (data.character.checkProficiency.investigation) {calcData.check.investigation = calcData.modifier.intelligence + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.investigation = calcData.modifier.intelligence + (calcData.proficiencyBonus/2); }
		else { calcData.check.investigation = calcData.modifier.intelligence; }
	};
	
	if (data.character.checkProficiency.medicine) {calcData.check.medicine = calcData.modifier.wisdom + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.medicine = calcData.modifier.wisdom + (calcData.proficiencyBonus/2); }
		else { calcData.check.medicine = calcData.modifier.wisdom; }
	};
	
	if (data.character.checkProficiency.nature) {calcData.check.nature = calcData.modifier.intelligence + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.nature = calcData.modifier.intelligence + (calcData.proficiencyBonus/2); }
		else { calcData.check.nature = calcData.modifier.intelligence; }
	};
	
	if (data.character.checkProficiency.perception) {calcData.check.perception = calcData.modifier.wisdom + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.perception = calcData.modifier.wisdom + (calcData.proficiencyBonus/2); }
		else { calcData.check.perception = calcData.modifier.wisdom; }
	};
	
	if (data.character.checkProficiency.performance) {calcData.check.performance = calcData.modifier.charisma + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.performance = calcData.modifier.charisma + (calcData.proficiencyBonus/2); }
		else { calcData.check.performance = calcData.modifier.charisma; }
	};
	
	if (data.character.checkProficiency.persuasion) {calcData.check.persuasion = calcData.modifier.charisma + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.persuasion = calcData.modifier.charisma + (calcData.proficiencyBonus/2); }
		else { calcData.check.persuasion = calcData.modifier.charisma; }
	};
	
	if (data.character.checkProficiency.religion) {calcData.check.religion = calcData.modifier.intelligence + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.religion = calcData.modifier.intelligence + (calcData.proficiencyBonus/2); }
		else { calcData.check.religion = calcData.modifier.intelligence; }
	};
	
	if (data.character.checkProficiency.sleight) { calcData.check.sleight = calcData.modifier.dexterity + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.sleight = calcData.modifier.dexterity + (calcData.proficiencyBonus/2); }
		else { calcData.check.sleight = calcData.modifier.dexterity; }
	};
	
	if (data.character.checkProficiency.stealth) { calcData.check.stealth = calcData.modifier.dexterity + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.stealth = calcData.modifier.dexterity + (calcData.proficiencyBonus/2); }
		else { calcData.check.stealth = calcData.modifier.dexterity; }
	};
	
	if (data.character.checkProficiency.survival) {calcData.check.survival = calcData.modifier.wisdom + calcData.proficiencyBonus; }
	else { 
		if (calcData.bard.jackOfAllTrades) {calcData.check.survival = calcData.modifier.wisdom + (calcData.proficiencyBonus/2); }
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
	
	//Max Spell Slots
	
	return(calcData);
}	

module.exports = statCalc;