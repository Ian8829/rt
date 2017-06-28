import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import ItemList from "./components/ItemList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ItemList/>
      </div>
    );
  }
}

export default App;
