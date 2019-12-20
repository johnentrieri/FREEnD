import React from 'react';

const spellNavigator = (props) => {

    const navItems = props.spells.map( (spell) => {
        return(
            <button onClick ={() => (props.handler(spell.spell))} className="list-group-item list-group-item-action">{spell.spell}</button>
        )
    })
    return(
        <div className="overflow-auto">
            <ul className="list-group">
                {navItems}
            </ul>
        </div>
    )
};

export default spellNavigator;