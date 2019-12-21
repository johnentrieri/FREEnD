import React from 'react'; 

const editAbilitiesPanel = (props) => {
    

    if (props.data.stats !== undefined) {

        const abilityInputs = Object.keys(props.data.stats.abilities).map( (ability) => {
            const label = ability.charAt(0).toUpperCase() + ability.slice(1) + ": ";
            return(
                <div className="row">
                    <div className="col-sm-6 text-left">
                        <p>{label}</p>
                    </div>
                    <div className="col-sm-6">
                        <input id={ability} className="form-control" placeholder={props.data.stats.abilities[ability].score} ></input>
                    </div>
                </div>
            )
        })

        return (
            <div className="container">
                <h3 className="my-4">Abilities</h3>
                {abilityInputs}             
            </div>
        );
    } else {
        return (<div />)
    }
};

export default editAbilitiesPanel;