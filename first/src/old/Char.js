import React from 'react';

const inline = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid blue',
        textAlign: 'center'
    }
    
    return(
        <div style = {style} onClick={props.clicked}>
          {props.charac}

        </div>
    );

};


export default inline;