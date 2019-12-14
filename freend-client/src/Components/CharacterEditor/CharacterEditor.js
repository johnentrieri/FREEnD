import React from 'react';

import EditInfoPanel from './EditInfoPanel/EditInfoPanel'

const characterEditor = (props) => {
    return (
        <div className="container">
            <h1>Edit Character</h1>
            <div className="row">
                <div className="col-md-4">
                    <EditInfoPanel data={props.data} />
                </div>
                <div className="col-md-4">

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