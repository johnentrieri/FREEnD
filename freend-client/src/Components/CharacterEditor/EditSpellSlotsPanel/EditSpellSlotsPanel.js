import React from 'react'; 

const editSpellSlotsPanel = (props) => {    

    if (props.data.stats !== undefined) {

        const inputs = props.data.stats.spellSlots.map( (val,index) => {
            return(
                <div className="row" key={index + "-editSpellSlotsPanel-" + val}>
                    <div className="col-sm-6">
                        <p>Level {index + 1} : </p>
                    </div>
                    <div className="col-sm-6">
                        <input disabled className="form-control" id={index} placeholder={val}></input>   
                    </div>
                </div>                
            )
        })
        return (
            <div className="container text-center">
                <h3 className="my-4">Spell Slots</h3>
                {inputs}           
            </div>
        );
    } else {
        return (<div />)
    }
};

export default editSpellSlotsPanel;