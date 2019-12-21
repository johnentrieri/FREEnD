import React from 'react';

import InfoPanel from './InfoPanel/InfoPanel';
import AbilitiesPanel from './AbilitiesPanel/AbilitiesPanel';
import SkillsPanel from './SkillsPanel/SkillsPanel';
import StatsPanel from './StatsPanel/StatsPanel';
import ClassPanel from './ClassPanel/ClassPanel';

const characterMain = (props) => {
    return (
        <div className="container">
            <h1>Character</h1>
            <div className="row">
                <div className="col-md-4">
                    <InfoPanel data={props.data} />
                    <StatsPanel data={props.data} />                    
                </div>
                <div className="col-md-4">
                    <SkillsPanel data={props.data} />
                </div>
                <div className="col-md-4">
                    <AbilitiesPanel data={props.data} /> 
                    <ClassPanel data={props.data} />   
                </div>
            </div>
        </div>
    )
};

export default characterMain;