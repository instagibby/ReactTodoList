import React, { Component } from 'react';
import Nav from './Nav/Nav.js';
import AddItem from './AddItem/AddItem.js';
import ItemsDisplay from './ItemsDisplay/ItemsDisplay.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <AddItem/>
        <ItemsDisplay/>
      </div>
    );
  }
}

export default App;
