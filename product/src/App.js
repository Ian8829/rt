import React, { Component } from 'react';
import './App.css';
import ItemList from "./components/itemList";
import ItemHeader from './components/itemHeader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemHeader/>
        <ItemList/>
      </div>
    );
  }
}

export default App;
