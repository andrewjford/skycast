import React, { Component } from 'react';
import './App.css';

import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Skycast</h2>
        </div>
        <Search />
      </div>
    );
  }
}

export default App;
