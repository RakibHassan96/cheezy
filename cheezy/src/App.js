import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comments from './comments';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Comments />
      </div>
    );
  }
}

export default App;