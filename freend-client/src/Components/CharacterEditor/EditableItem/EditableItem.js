import React from 'react';

const editableItem = (props) => {
    let oldVal = props.val;

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-4 text-right">
                    <p>{props.label}</p>
                </div>
                <div className="col-sm-8">
                    <input id={props.id}className="form-control" placeholder={oldVal}></input>
                </div>
            </div>
        </div>
    )

};

export default editableItem;