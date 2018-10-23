import React, { Component } from 'react';
import marvelHeader from "./components/Header"
import Card from "./components/ProfileHeader"
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import CharDetail from './components/CharacterProfile'
import MarvelHeader from "./components/Header"
import ListProfiles from './components/ListProfiles'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = { data: {} }
  }

  componentDidMount() {console.log('yohohoh')
      fetch('http://gateway.marvel.com/v1/public/characters?apikey=bd9d97899a2ceec5e69056ade7abdd85&ts=1&hash=428bd30e1f2da66f0da85f40e263d168')
      .then(response => response.json())
      .then(response => this.setState({'data':response}))
    }
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
