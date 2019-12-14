import React from 'react';

const infoPanel = (props) => {
    if (props.data.stats !== undefined) {
        const abilities = Object.keys(props.data.stats.abilities).map( (key) => {
            const label = key.charAt(0).toUpperCase() + key.slice(1);

            const saveProf = props.data.stats.abilities[key]['isSaveProf'] ? "*" : "";

            const score = props.data.stats.abilities[key]['score'];

            let mod = " (" 
            mod += props.data.stats.abilities[key]['mod'] >= 0 ? "+" : "";
            mod += props.data.stats.abilities[key]['mod']
            mod += ")"

            let check = " (" 
            check += props.data.stats.abilities[key]['check'] >= 0 ? "+" : "";
            check += props.data.stats.abilities[key]['check']
            check += ")"

            let save = " (" 
            save += props.data.stats.abilities[key]['save'] >= 0 ? "+" : "";
            save += props.data.stats.abilities[key]['save']
            save += ")"


            return (
                <tr>
                    <td><b>{saveProf}</b></td>
                    <td className="text-left">{label}</td>
                    <td>{score}</td>
                    <td>{mod}</td>
                    <td>{check}</td>
                    <td>{save}</td>
                </tr>
            )
        })

        return (
            <div className="text-center">
                <h3 className="my-3 text-center">Abilities</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Ability</th>
                            <th scope="col">Score</th>
                            <th scope="col">Modifier</th>
                            <th scope="col">Check</th>
                            <th scope="col">Save</th>
                        </tr>
                    </thead>
                    <tbody>
                        {abilities}
                    </tbody>
                </table>       
            </div>
        );
    } else {
        return (<div />)
    }
};

export default infoPanel;