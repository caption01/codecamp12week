import React from 'react';
import Children from './components/HomeWork1Children/Children.js';
import Trillo from './components/Trillo/Trillo.js'
import TrilloToDo from './components/Trillo/Trillo.js'

class App extends React.Component{


  render(){
    return (
      <div className="App">
        <Children />
        <Trillo />
        <TrilloToDo />
      </div>
    );
  }
  
}


export default App;
