import React from 'react';
import style from '../container/App.module.css';


const Valid = (props) => {

    let message = 'T T S'; 
    if(props.length >= 5) {
        message = 'T T L';
    }

    return(
           <div className={style.vali}>
                <p>{message}</p>
                <h1>Max</h1>
                <p>Your age: 20</p>
               <h1>Menu</h1>
              <p>Your 20</p>
           </div>
            
    );

};


export default Valid;