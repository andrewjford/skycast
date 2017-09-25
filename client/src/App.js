import React, { Component } from 'react';
import './App.css';

import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import WeeklyTable from './components/WeeklyTable';
import seed from './seed';

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

  componentDidMount() {
    this.setState(seed);
  }

  render() {
    return (
      <div className="App">
        <h1>Skycast</h1>
        <Search updateState={this.handleCurrentFetch} />
        <CurrentWeather state={this.state}/>
        <WeeklyTable weather={this.state.weather}/>
      </div>
    );
  }
}

export default App;
