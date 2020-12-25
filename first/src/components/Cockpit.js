import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
  });
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }
    
    const assignedClasses = [];
    if(props.persons.length <= 2) {
      assignedClasses.push(classes.Red);
    }
    if(props.persons.length <= 1) {
      assignedClasses.push(classes.Bold);
    }

    return (
        <div className = {classes.Cockpit}>
        <h1 className={classes.Head}>Hi i m lenovo</h1>
        <p className={assignedClasses.join(' ')} > WORKING FINE </p>
        <button 
        className={btnClass}
         onClick={props.clicked}> Toggle persons</button>
         </div>
    );
} 

export default cockpit;