import React, { Component } from 'react';
import './App.css';

import SearchForm from './Components/SearchForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Skycast</h2>
        </div>
        <SearchForm />
      </div>
    );
  }
}

export default App;
