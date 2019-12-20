import React from 'react';

import SpellNavigator from './SpellNavigator/SpellNavigator'
import SpellWindow from './SpellWindow/SpellWindow'

const spellBrowser = (props) => {

    const knownSpells = []

    if (props.data.spells !== undefined) {
        for(let spell of props.data.spells) {
            knownSpells.push(spell);
        }
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <h4>Known Spells</h4>
                    <SpellNavigator spells={knownSpells} handler={props.spellHandler}/>
                </div>
                <div className="col-sm-6">
                    <SpellWindow spell={props.currSpell}/>                 
                </div>
                <div className="col-sm-3">
                    <h3>Spell Library</h3>
                    <SpellNavigator spells={props.spellData} handler={props.spellHandler}/>
                </div>                
            </div>
        </div>
    )
};

export default spellBrowser;