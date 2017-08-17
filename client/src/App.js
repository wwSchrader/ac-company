import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './NavigationBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavigationBar} />
      </div>
    );
  }
}

export default App;
