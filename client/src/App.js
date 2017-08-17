import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusText: "!!!Not Connected to Express!!!"
    };
  }

  componentDidMount() {
    fetch("/api/index", {
      method: 'get'
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(resp => {
      this.setState({
        statusText: resp.response
      });
    })
    .catch(ex => console.log ("Server fetch went wrong: " + ex));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.state.statusText}
        </p>
      </div>
    );
  }
}

export default App;
