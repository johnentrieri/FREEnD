import React from 'react';

import ItemNavigator from './ItemNavigator/ItemNavigator'
import ItemWindow from './ItemWindow/ItemWindow'
import CurrencyPanel from './CurrencyPanel/CurrencyPanel';

const itemBrowser = (props) => {

    const inventory = []

    if (props.data.inventory !== undefined) {
        for(let item of props.data.inventory.items) {
            inventory.push(item);
        }        
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <CurrencyPanel data={props.data} />                 
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