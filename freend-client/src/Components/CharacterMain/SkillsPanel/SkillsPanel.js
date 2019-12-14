import React from 'react';

const skillsPanel = (props) => {
    if (props.data.stats !== undefined) {
        const skills = Object.keys(props.data.stats.skills).map( (key) => {
            const label = key.charAt(0).toUpperCase() + key.slice(1);

            const prof = props.data.stats.skills[key]['isCheckProf'] ? "*" : "";

            let check = " (" 
            check += props.data.stats.skills[key]['check'] >= 0 ? "+" : "";
            check += props.data.stats.skills[key]['check'] + ")"

            return (
                <tr>
                    <td><b>{prof}</b></td>
                    <td className="text-left">{label}</td>
                    <td>{check}</td>    
                </tr>
            )
        })

        return (
            <div className="text-center">
                <h3 className="my-3 text-center">Skills</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Skill</th>
                            <th scope="col">Check</th>
                        </tr>
                    </thead>
                    <tbody>
                        {skills}
                    </tbody>
                </table>                
            </div>
        );
    } else {
        return (<div />)
    }
};

export default skillsPanel;