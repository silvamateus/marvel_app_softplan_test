import React, { Component } from 'react';
import marvelHeader from "./components/Header"
import Card from "./components/ProfileHeader"
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import CharDetail from './components/CharacterProfile'
import MarvelHeader from "./components/Header"
import ListProfiles from './components/ListProfiles'

class App extends Component {
  render() {
    return (
      <div className="App">
      <MarvelHeader/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/details/:id" component={Detail}/>
          <Route path="/List" component={List}/>
        </Switch>
    </Router>
      </div>
    );
  }
}

export default App;
