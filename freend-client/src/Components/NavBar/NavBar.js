import React from 'react';

const navBar = (props) => {
    const buttons = props.pageData.map( (pageData) => {
        return(
        <button className="btn btn-dark m-1" onClick={pageData.handler}>{pageData.name}</button>
        );
    })
    return (
        <div>
            {buttons}
        </div>
    );
};

export default navBar;