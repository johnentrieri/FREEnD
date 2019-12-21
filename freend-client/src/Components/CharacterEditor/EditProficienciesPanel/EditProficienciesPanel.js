import React from 'react'; 

const editProficienciesPanel = (props) => {    

    if (props.data.stats !== undefined) {

        const skillCheckboxes = Object.keys(props.data.stats.skills).map( (skill,index) => {
            const label = skill.charAt(0).toUpperCase() + skill.slice(1);
            let input = <input disabled type="checkbox" id={skill} ></input>
            if (props.data.stats.skills[skill].isCheckProf) {
                input = <input disabled checked type="checkbox" id={skill} ></input>;
            }
            return(
                <div className="text-left" key={index + "-editSkillProficienciesPanel-" + skill}>                    
                    <p>{input}  {label}</p>                                        
                </div>
            )
        });

        const saveCheckboxes = Object.keys(props.data.stats.abilities).map( (ability,index) => {
            const label = ability.charAt(0).toUpperCase() + ability.slice(1) + " Save";
            let input = <input disabled type="checkbox" id={ability} ></input>
            if (props.data.stats.abilities[ability].isSaveProf) {
                input = <input disabled checked type="checkbox" id={ability} ></input>;
            }
            return(
                <div className="text-left" key={index + "-editAbilityProficienciesPanel-" + ability}>                    
                    <p>{input}  {label}</p>                                        
                </div>
            )
        });

        return (
            <div className="container">
                <h3 className="my-4">Proficiencies</h3>
                <div className="row">
                    <div className="col-sm-6">                    
                        {saveCheckboxes}
                    </div>
                    <div className="col-sm-6">                    
                        {skillCheckboxes}
                    </div>                   
                </div>            
            </div>
        );
    } else {
        return (<div />)
    }
};

export default editProficienciesPanel;