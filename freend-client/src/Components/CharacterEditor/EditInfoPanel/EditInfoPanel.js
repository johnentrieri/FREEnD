import React from 'react';

import EditableItem from '../EditableItem/EditableItem'

const editInfoPanel = (props) => {
    if (props.data.info !== undefined) {
        return (
            <div>
                <h3>Info</h3>
                <EditableItem id="name" label="Name:" val={props.data.info.name} />
                <EditableItem id="level" label="Level:" val={props.data.info.level} />
                <EditableItem id="subrace" label="Subrace:" val={props.data.info.subrace} />
                <EditableItem id="race" label="Race:" val={props.data.info.race} />
                <EditableItem id="class" label="Class:" val={props.data.info.class} />
                <EditableItem id="age" label="Age:" val={props.data.info.age} />
                <EditableItem id="height" label="Height:" val={props.data.info.height} />
                <EditableItem id="weight" label="Weight:" val={props.data.info.weight} />
                <EditableItem id="alignment" label="Alignment:" val={props.data.info.alignment} />
                <EditableItem id="background" label="Background:" val={props.data.info.background} />
            </div>
        );
    } else {
        return (<div />)
    }
};

export default editInfoPanel;