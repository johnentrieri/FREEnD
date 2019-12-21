import React from 'react';

import EditInfoPanel from './EditInfoPanel/EditInfoPanel';
import EditStatsPanel from './EditStatsPanel/EditStatsPanel';
import EditAbilitiesPanel from './EditAbilitiesPanel/EditAbilitiesPanel';
import EditCurrencyPanel from './EditCurrencyPanel/EditCurrencyPanel';
import EditProficienciesPanel from './EditProficienciesPanel/EditProficienciesPanel';
import EditSpellSlotsPanel from './EditSpellSlotsPanel/EditSpellSlotsPanel';

const characterEditor = (props) => {
    return (
        <div className="container">
            <h3 className="my-2">Edit Character</h3>
            <div className="row mt-4">
                <div className="col-md-4">
                    <EditInfoPanel data={props.data} />
                    <EditCurrencyPanel data={props.data} />
                </div>
                <div className="col-md-4">
                    <EditStatsPanel data={props.data} />                  
                    <EditAbilitiesPanel data={props.data} />
                    <EditSpellSlotsPanel data={props.data} />              
                </div>
                <div className="col-md-4">
                    <EditProficienciesPanel data={props.data} />
                </div>
            </div>
            <div className="row m-auto">
                <button className="btn btn-dark my-4 mx-auto" onClick={props.applyHandler}>Apply</button>
            </div>
        </div>
    )
};

export default characterEditor;