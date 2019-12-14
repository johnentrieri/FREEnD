import React from 'react';

const infoPanel = (props) => {
    if (props.data.info !== undefined) {
        return (
            <div className="text-left">
                <img
                    className="rounded-circle my-3 mx-auto d-block"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                    alt="Placeholder"
                    width="140"
                    height="140">
                </img>
                <h3 className="my-3 text-center">{props.data.info.name}</h3>
                <p><b>Level: </b>{props.data.info.level}</p>
                <p><b>Class: </b>{props.data.info.class}</p>
                <p><b>Race: </b>{props.data.info.subrace + " " + props.data.info.race}</p>
                <p><b>Age: </b>{props.data.info.age}</p>
                <p><b>Height: </b>{props.data.info.height}</p>
                <p><b>Weight: </b>{props.data.info.weight}</p>
                <p><b>Background: </b>{props.data.info.background}</p>
                <p><b>Alignment: </b>{props.data.info.alignment}</p>
                <p><b>Languages: </b>{props.data.info.languages.join(", ")}</p>
            </div>
        );
    } else {
        return (<div />)
    }
};

export default infoPanel;