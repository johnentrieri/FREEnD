import React from 'react';

import BardPanel from './BardPanel/BardPanel';

const classPanel = (props) => {

    let classData = null;

    if(props.data.info !== undefined) {
        switch(props.data.info.class) {
            case "Bard":
                classData = <BardPanel data={props.data} />;
                break;
            default:
                break;
        }
    }

    return (
        <div>
            {classData}
        </div>
    )
};

export default classPanel;