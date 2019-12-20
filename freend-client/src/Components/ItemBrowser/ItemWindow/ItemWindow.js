import React from 'react';

const itemWindow = (props) => {

    return(
        <div className="container">
            <div className="row mb-4">
                <div className="col-md-12">
                    <h4>Selected Item</h4>
                </div>    
            </div>
            <div className="row">
                <div className="col-md-12 text-left">
                    <h5>{props.item.item}</h5>
                </div>    
            </div>
            <div className="row">
                <div className="col-md-12 text-left">
                    <p><em>
                        {props.item.type + " (" + props.item.subtype + ")"}
                    </em></p>
                </div>    
            </div>
            <div className="row">
                <div className="col-md-4 text-left">
                    <p><strong>Cost:</strong></p>
                </div>
                <div className="col-md-8 text-left">
                    <p>{props.item.cost}</p>
                </div> 
            </div>
            <div className="row">
                <div className="col-md-4 text-left">
                    <p><strong>Weight:</strong></p>
                </div>
                <div className="col-md-8 text-left">
                    <p>{props.item.weight}</p>
                </div> 
            </div>
            <div className="row">
                <div className="col-md-4 text-left">
                    <p><strong>Amount Carrying:</strong></p>
                </div>
                <div className="col-md-8 text-left">
                    <p>{props.item.quantity >= 0 ? props.item.quantity : "0"}</p>
                </div> 
            </div>            
        </div>
    )
};

export default itemWindow;