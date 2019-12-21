import React from 'react';

const currencyPanel = (props) => {

    let currency = null;

    if (props.data.inventory !== undefined) {

        currency = Object.keys(props.data.inventory.currency).map( (currency) => {
            const label = currency.charAt(0).toUpperCase() + currency.slice(1) + ": ";
            return(
                <div className="row text-left">
                    <div className="col-sm-6">
                        <p><strong>{label}</strong></p>
                    </div>
                    <div className="col-sm-6">
                        <p>{props.data.inventory.currency[currency]}</p>
                    </div>
                </div>
            )
        })
        
    }

    return(
        <div>
            <h4>Currency</h4>
            {currency}
        </div>
    )
};

export default currencyPanel;