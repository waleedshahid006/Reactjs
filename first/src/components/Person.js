import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
    render(){
        console.log('[Person.js] rendering...');

        return(
            <div className={classes.Person}>
            <p onClick ={this.props.click}> I am {this.props.name} and I am {this.props.age} years old!</p>
            <p>{ this.props.childern}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>   
        )
    }

}
export default Person;