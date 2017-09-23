import React, { Component } from 'react';
import './App.css';

import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';

class App extends Component {
  constructor(){
    super();

    this.state = {
      current: "",
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Skycast</h2>
        </div>
        <Search parentThis={this} state={this.state}/>
        <CurrentWeather state={this.state.current}/>
      </div>
    );
  }
}

export default App;
