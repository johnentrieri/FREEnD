import React from 'react';

import ItemNavigator from './ItemNavigator/ItemNavigator'
import ItemWindow from './ItemWindow/ItemWindow'

const itemBrowser = (props) => {

    const inventory = []

    let currency = null;

    if (props.data.inventory !== undefined) {
        for(let item of props.data.inventory.items) {
            inventory.push(item);
        }

        currency = (
            <div className="container">
                <h4>Currency</h4>
                <div className="row">
                    <div className="col-md-4 text-left">
                        <p><strong>Platinum:</strong></p>
                    </div>
                    <div className="col-md-8 text-left">
                        <p>{props.data.inventory.currency.platinum}</p>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-md-4 text-left">
                        <p><strong>Gold:</strong></p>
                    </div>
                    <div className="col-md-8 text-left">
                        <p>{props.data.inventory.currency.gold}</p>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-md-4 text-left">
                        <p><strong>Silver:</strong></p>
                    </div>
                    <div className="col-md-8 text-left">
                        <p>{props.data.inventory.currency.silver}</p>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-md-4 text-left">
                        <p><strong>Copper:</strong></p>
                    </div>
                    <div className="col-md-8 text-left">
                        <p>{props.data.inventory.currency.copper}</p>
                    </div> 
                </div>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    {currency}
                    <h4>Inventory</h4>
                    <ItemNavigator items={inventory} handler={props.itemHandler}/>
                </div>
                <div className="col-sm-6">
                    <ItemWindow item={props.currItem}/>                 
                </div>
                <div className="col-sm-3">
                    <h3>Item Library</h3>
                    <ItemNavigator items={props.itemData} handler={props.itemHandler}/>
                </div>                
            </div>
        </div>
    )
};

export default itemBrowser;