import React from 'react'; 

const editCurrencyPanel = (props) => {    

    if (props.data.inventory !== undefined) {

        const currencyInputs = Object.keys(props.data.inventory.currency).map( (currency) => {
            if( currency !== "total") {
            const label = currency.charAt(0).toUpperCase() + currency.slice(1) + ": ";
                return(
                    <div className="row">
                        <div className="col-sm-4 text-left">
                            <p>{label}</p>
                        </div>
                        <div className="col-sm-8">
                            <input id={currency} className="form-control" placeholder={props.data.inventory.currency[currency]} ></input>
                        </div>
                    </div>
                )
            }
            else {
                return(
                    <div />
                )
            }
        })

        return (
            <div className="container">
                <h3 className="my-4">Currency</h3>
                {currencyInputs}             
            </div>
        );
    } else {
        return (<div />)
    }
};

export default editCurrencyPanel;