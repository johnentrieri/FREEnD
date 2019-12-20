import React from 'react'; 

const editStatsPanel = (props) => {
    if (props.data.stats !== undefined) {
        return (
            <div className="container">
                <h3>Stats</h3>
                <div className="row">
                    <div className="col-sm-6 text-right">
                        <p>HP: </p>
                    </div>
                    <div className="col-sm-6">
                        <input id="HP" className="form-control" placeholder={props.data.stats.HP} ></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 text-right">
                        <p>Max HP: </p>
                    </div>
                    <div className="col-sm-6">
                        <input id="maxHP" className="form-control" placeholder={props.data.stats.maxHP}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 text-right">
                        <p>Hit Die: </p>
                    </div>
                    <div className="col-sm-6">
                        <input id="hitDie" className="form-control" placeholder={props.data.stats.hitDie}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 text-right">
                        <p>Armor Class: </p>
                    </div>
                    <div className="col-sm-6">
                        <input id="armorClass" className="form-control" placeholder={props.data.stats.armorClass}></input>
                    </div>
                </div>
            </div>
        );
    } else {
        return (<div />)
    }
};

export default editStatsPanel;