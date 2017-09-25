import React, { Component } from 'react';
import './App.css';

import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';

class App extends Component {
  constructor(){
    super();

    this.state = {
      weather: "",
      location: "",
    }

    this.handleCurrentFetch = this.handleCurrentFetch.bind(this);
  }

  handleCurrentFetch(json) {
    this.setState({...this.state,
      weather: json.weather,
      location: json.location
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Skycast</h1>
        </div>
        <Search updateState={this.handleCurrentFetch} />

        <CurrentWeather state={this.state}/>

      </div>
    );
  }
}

export default App;
