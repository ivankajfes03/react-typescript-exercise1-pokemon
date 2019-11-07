import React, { Component } from 'react';
import './App.css';
import ClicksAndInputs from './components/ClicksAndInputs';
import HelloWorld from './components/HelloWorld';
import Pokemon from './components/Pokemon';
class App extends Component <any, any>{
  constructor(props: any) {
    super(props);
    this.state = { data: [] }
  }
   
  public render () {
    return (
      <div className="App">
        <ClicksAndInputs defaultName="World" />
        <Pokemon />
        
      </div>
    );
  }
 
}

export default App;
