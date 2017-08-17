import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './NavigationBar.js';
import LoginPage from './LoginPage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavigationBar} />
        <Route exact path="/" component={LoginPage} />
      </div>
    );
  }
}

export default App;
