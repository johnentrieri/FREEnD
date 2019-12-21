import React from 'react';

const itemNavigator = (props) => {

    const navItems = props.items.map( (item,index) => {
        return(
            <button
                key={index + "-itemNavigator-" + item}
                onClick ={() => (props.handler(item.item))}
                className="list-group-item list-group-item-action">
                    {item.item}
                </button>
        )
    })
    return(
        <div className="overflow-auto">
            <ul className="list-group">
                {navItems}
            </ul>
        </div>
    )
};

export default itemNavigator;