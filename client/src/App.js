import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './NavigationBar.js';
import LoginPage from './LoginPage.js';
import JobsPage from './JobsPage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavigationBar} />
        <Route exact path="/" component={LoginPage} />
        <Route path="/jobs" component={JobsPage} />
      </div>
    );
  }
}

export default App;
