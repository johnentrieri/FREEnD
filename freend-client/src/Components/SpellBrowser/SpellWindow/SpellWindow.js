import React from 'react';

const spellWindow = (props) => {

    return(
        <div className="container">
            <div className="row mb-4">
                <div className="col-md-12">
                    <h4>Selected Spell</h4>
                </div>    
            </div>
            <div className="row">
                <div className="col-md-12 text-left">
                    <h5>{props.spell.spell}</h5>
                </div>    
            </div>
            <div className="row">
                <div className="col-md-12 text-left">
                    <p><em>
                        {"Level " + props.spell.level + " " + props.spell.school}
                    </em></p>
                </div>    
            </div>
            <div className="row">
                <div className="col-md-4 text-left">
                    <p><strong>Casting Time:</strong></p>
                </div>
                <div className="col-md-8 text-left">
                    <p>{props.spell.castingTime}</p>
                </div> 
            </div>
            <div className="row">
                <div className="col-md-4 text-left">
                    <p><strong>Components:</strong></p>
                </div>
                <div className="col-md-8 text-left">
                    <p>{props.spell.components}</p>
                </div> 
            </div>
            <div className="row">
                <div className="col-md-4 text-left">
                    <p><strong>Duration:</strong></p>
                </div>
                <div className="col-md-8 text-left">
                    <p>{props.spell.duration}</p>
                </div> 
            </div>
            <div className="row">
                <div className="col-md-12 text-left">
                    <p>                        
                        {props.spell.description}
                    </p>
                </div>    
            </div>
            <div className="row">
                <div className="col-md-12 text-left">
                    <p><em>                       
                        {props.spell.higherLevelDescription}
                    </em></p>
                </div>    
            </div>
            
        </div>
    )
};

export default spellWindow;