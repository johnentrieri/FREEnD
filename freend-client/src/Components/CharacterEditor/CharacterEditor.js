import React from 'react';

import EditInfoPanel from './EditInfoPanel/EditInfoPanel';
import EditStatsPanel from './EditStatsPanel/EditStatsPanel';

const characterEditor = (props) => {
    return (
        <div className="container">
            <h3 className="my-2">Edit Character</h3>
            <div className="row mt-4">
                <div className="col-md-4">
                    <EditInfoPanel data={props.data} />
                </div>
                <div className="col-md-4">
                    <EditStatsPanel data={props.data} />
                </div>
                <div className="col-md-4">

                </div>
            </div>
            <div className="row m-auto">
                <button className="btn btn-dark my-4 mx-auto" onClick={props.applyHandler}>Apply</button>
            </div>
        </div>
    )
};

export default characterEditor;