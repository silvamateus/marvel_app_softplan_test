import React, { Component } from 'react';
import marvelHeader from "./components/Header"
import Card from "./components/ProfileHeader"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {marvelHeader()}
        {Card()}
      </div>
    );
  }
}

export default App;
