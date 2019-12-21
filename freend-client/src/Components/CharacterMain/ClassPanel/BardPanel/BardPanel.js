import React from 'react';

const bardPanel = (props) => {

    return (
        <div className="text-left">
            <h4 className="text-center">Bard Stats</h4>

            <p><b>College: </b>{props.data.classData.college}</p>
            <p>
                <b>Bardic Inspiration: </b>
                {
                    + "  "
                    + props.data.classData.bardicInspirationDie
                    + " / "
                    + props.data.classData.maxBardicInspirationDie
                    + " (" 
                    + props.data.classData.bardicInspirationDieType
                    + ")"}
            </p>
        </div>
    )
};

export default bardPanel;