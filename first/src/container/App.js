import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons';
import Cockpit from '../components/Cockpit';
import {NewoneA,NewoneB} from '../components/Newone';

class App extends Component {

  state = {
    persons: [
      {id:'12', name: 'kashoof', age: 28},
      {id:'14', name: 'malik', age: 26},
      {id:'16', name: 'baba', age: 72},
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangeHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });
  
  const person = {
    ...this.state.persons[personIndex]
  };

  person.name = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = person;
  this.setState({ persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow});
  }

  render() {
    let persons = null;
    
    if(this.state.showPersons) {
      persons = 
          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangeHandler} />; 
          }
    

    return (
      <div className={classes.App}>
         <Cockpit 
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}/>
         {persons}
         <NewoneA />
         <NewoneB />
      </div>
    );
  }
}
 
export default App;
