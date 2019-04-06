function calculateStats(base) {
    let calcData = base;

    //Max Hit Die
    calcData.character.stats.maxHitDie = calcData.character.level;

    //Speed
	switch(calcData.character.race) {
		case 'Halfling':
		case 'Dwarf':
		case 'Gnome':
            calcData.character.stats.speed = 25;
			break;
		case 'Dragonborn':
		case 'Elf':
		case 'Half-Elf':
		case 'Half-Orc':
		case 'Human':
		case 'Tiefling':
            calcData.character.stats.speed = 30;
			break;
		default:
            calcData.character.stats.speed = 25;
			break;
    }
    
    //Proficiency Bonus
	if (calcData.character.level <= 4) { calcData.character.stats.profBonus = 2}
	else if (calcData.character.level <= 8) { calcData.character.stats.profBonus = 3}
	else if (calcData.character.level <= 12) { calcData.character.stats.profBonus = 4}
	else if (calcData.character.level <= 16) { calcData.character.stats.profBonus = 5}
	else if (calcData.character.level <= 20) { calcData.character.stats.profBonus = 6}
    else { calcData.character.stats.profBonus = 6};

	//Ability Calculations
	let abilities = Object.keys(calcData.character.abilities);
	for (let i=0 ; i< abilities.length; i++) {

		//Ability Modifiers
		calcData.character.abilities[abilities[i]].modifier = Math.floor((calcData.character.abilities[abilities[i]].base - 10) / 2);

		//Ability Check Proficiency
		if (calcData.character.abilities[abilities[i]].checkProf) {
			calcData.character.abilities[abilities[i]].checkMods.push({name: 'Proficiency', val: calcData.character.stats.profBonus});
		}

		//Saving Throw Proficiency
		if (calcData.character.abilities[abilities[i]].saveProf) {
			calcData.character.abilities[abilities[i]].saveMods.push({name: 'Proficiency', val: calcData.character.stats.profBonus});
		}

		//Ability Check Modifier
		calcData.character.abilities[abilities[i]].checkModifier = calcData.character.abilities[abilities[i]].modifier;
		for ( let j=0 ; j < calcData.character.abilities[abilities[i]].checkMods.length ; j++ ) {
			calcData.character.abilities[abilities[i]].checkModifier += calcData.character.abilities[abilities[i]].checkMods[j].val;
		}

		//Saving Throw Modifier
		calcData.character.abilities[abilities[i]].saveModifier = calcData.character.abilities[abilities[i]].modifier;
		for ( let j=0 ; j < calcData.character.abilities[abilities[i]].saveMods.length ; j++ ) {
			calcData.character.abilities[abilities[i]].saveModifier += calcData.character.abilities[abilities[i]].saveMods[j].val;
		}
	}

	let skills = Object.keys(calcData.character.skills);
	for (let i=0 ; i< skills.length; i++) {

		//Skill Proficiency
		if (calcData.character.skills[skills[i]].proficiency) {
			calcData.character.skills[skills[i]].mods.push({name: 'Proficiency', val: calcData.character.stats.profBonus});
		}

		//Skill Modifier
		let primeStat = calcData.character.skills[skills[i]].primary.toLowerCase();		
		calcData.character.skills[skills[i]].modifier = calcData.character.abilities[primeStat].modifier;
		for ( let j=0 ; j < calcData.character.skills[skills[i]].mods.length ; j++ ) {
			calcData.character.skills[skills[i]].modifier += calcData.character.skills[skills[i]].mods[j].val;
		}
	}

    //Spell Attack Bonus & Spell Save DC
	switch(calcData.character.class) {
		case 'Barbarian':
		case 'Bard':
		case 'Paladin':
			calcData.character.stats.spellAtkBonus = calcData.character.abilities.charisma.modifier + calcData.character.stats.profBonus;
			calcData.character.stats.spellSaveDC = 8 + calcData.character.abilities.charisma.modifier + calcData.character.stats.profBonus;
			break;
		case 'Cleric':
		case 'Druid':
		case 'Ranger':
		case 'Sorcerer':
		case 'Warlock':
            calcData.character.stats.spellAtkBonus = calcData.character.abilities.wisdom.modifier + calcData.character.stats.profBonus;
            calcData.character.stats.spellSaveDC = 8 + calcData.character.abilities.wisdom.modifier + calcData.character.stats.profBonus;
			break;
		case 'Wizard':
            calcData.character.stats.spellAtkBonus = calcData.character.abilities.intelligence.modifier + calcData.character.stats.profBonus;
            calcData.character.stats.spellSaveDC = 8 + calcData.character.abilities.intelligence.modifier + calcData.character.stats.profBonus;
			break;
		case 'Fighter': //TODO - Eldritch Knight Archetype
		case 'Rogue': //TODO - Arcane Trickster Archetype
		case 'Monk':
		default:
            calcData.character.stats.spellAtkBonus = 0;
			calcData.character.stats.spellSaveDC = 0;
	}


	   
	   











    //Initiative Bonux
	calcData.character.stats.initBonus = calcData.character.abilities.dexterity.checkModifier;

    //Passive Perception
    calcData.character.stats.passPerception = 10 + calcData.character.abilities.wisdom.checkModifier;



    return(calcData);
}

module.exports = calculateStats;