import React from 'react';

const statsPanel = (props) => {
    if (props.data.stats !== undefined) {
        return (
            <div className="text-left my-4">
                <h3 className="my-3 text-center">Stats</h3>
                <p><b>Health: </b>{props.data.stats.HP + " / " + props.data.stats.maxHP}</p>
                <p><b>Hit Dice: </b>{props.data.stats.hitDie + " / " + props.data.stats.maxHitDie}</p>
                <p><b>Speed: </b>{props.data.stats.speed}</p>
                <p><b>Armor Class: </b>{props.data.stats.armorClass}</p>
                <p><b>Spell Save DC: </b>{props.data.stats.spellSaveDC}</p>
                <p><b>Passive Perception: </b>{props.data.stats.passivePerception}</p>
                <p><b>Initiative: </b>{ props.data.stats.initiative >= 0 ? "+" + props.data.stats.initiative : props.data.stats.initiative}</p>
                <p><b>Spell Attack Bonus: </b>{ props.data.stats.spellAttackBonus >= 0 ? "+" + props.data.stats.spellAttackBonus : props.data.stats.spellAttackBonus}</p>               
                <p><b>Proficency Bonus: </b>{ props.data.stats.profBonus >= 0 ? "+" + props.data.stats.profBonus : props.data.stats.profBonus}</p>
            </div>
        );
    } else {
        return (<div />)
    }
};

export default statsPanel;