import React from 'react';
import Char from './Char'; 

const handler = (props) => props.userInput.split('').map((ch,index) => {
    return <Char charac = {ch} key = {index} clicked = { () => this.deleteCharHandler(index)} /> ; 
  });    