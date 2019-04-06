function calculateStats(base) {
    let calcData = base;

    //Max Hit Die
    calcData.character.stats.maxHitDie = calcData.character.level;

    //Speed
	switch(calcData.character.race) {
		case 'Halfling':
		case 'Dwarf':
		case 'Gnome':
		case 'Halfling':
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
    
    //Ability Modifiers
    calcData.character.abilities.strength.modifier = Math.floor((calcData.character.abilities.strength.base - 10) / 2);
    calcData.character.abilities.dexterity.modifier = Math.floor((calcData.character.abilities.dexterity.base - 10) / 2);
    calcData.character.abilities.constitution.modifier = Math.floor((calcData.character.abilities.constitution.base - 10) / 2);
    calcData.character.abilities.intelligence.modifier = Math.floor((calcData.character.abilities.intelligence.base - 10) / 2);
    calcData.character.abilities.wisdom.modifier = Math.floor((calcData.character.abilities.wisdom.base - 10) / 2);
    calcData.character.abilities.charisma.modifier = Math.floor((calcData.character.abilities.charisma.base - 10) / 2);
    
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