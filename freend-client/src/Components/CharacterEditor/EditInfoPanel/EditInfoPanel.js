import React from 'react'; 

const editInfoPanel = (props) => {
    if (props.data.info !== undefined) {
        return (
            <div className="container">
                <h3>Info</h3>
                <div className="row">
                    <div className="col-sm-4 text-right">
                        <p>Name: </p>
                    </div>
                    <div className="col-sm-8">
                        <input disabled id="name" className="form-control" placeholder={props.data.info.name} ></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 text-right">
                        <p>Level: </p>
                    </div>
                    <div className="col-sm-8">
                        <input id="level" className="form-control" placeholder={props.data.info.level}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 text-right">
                        <p>Subrace: </p>
                    </div>
                    <div className="col-sm-8">
                        <input disabled id="subrace" className="form-control" placeholder={props.data.info.subrace}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 text-right">
                        <p>Race: </p>
                    </div>
                    <div className="col-sm-8">
                        <input disabled id="race" className="form-control" placeholder={props.data.info.race}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 text-right">
                        <p>Class: </p>
                    </div>
                    <div className="col-sm-8">
                        <input disabled id="class" className="form-control" placeholder={props.data.info.class}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 text-right">
                        <p>Age: </p>
                    </div>
                    <div className="col-sm-8">
                        <input id="age" className="form-control" placeholder={props.data.info.age}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 text-right">
                        <p>Height: </p>
                    </div>
                    <div className="col-sm-8">
                        <input id="height" className="form-control" placeholder={props.data.info.height}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 text-right">
                        <p>Weight: </p>
                    </div>
                    <div className="col-sm-8">
                        <input id="weight" className="form-control" placeholder={props.data.info.weight}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 text-right">
                        <p>Alignment: </p>
                    </div>
                    <div className="col-sm-8">
                        <input id="alignment" className="form-control" placeholder={props.data.info.alignment}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 text-right">
                        <p>Background: </p>
                    </div>
                    <div className="col-sm-8">
                        <input disabled id="background" className="form-control" placeholder={props.data.info.background}></input>
                    </div>
                </div>
            </div>
        );
    } else {
        return (<div />)
    }
};

export default editInfoPanel;