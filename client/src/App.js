import React, { Component } from 'react';
import './App.css';

import { fetchCurrent, fetchHistory } from './services/BackendService';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import WeeklyTable from './components/WeeklyTable';
import Footer from './components/Footer';
import AppHeader from './components/AppHeader';
import seed from './seed';

class App extends Component {
  constructor(){
    super();

    this.state = {
      weather: "",
      location: "",
    }

    this.handleCurrentFetch = this.handleCurrentFetch.bind(this);
    this.fetchDated = this.fetchDated.bind(this);
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

  fetchDated(date) {
    if(date){
      fetchHistory(this.state.location, date)
      .then(response => response.json())
      .then(json => {
        this.setState({...this.state,
          weather: json.weather,
          location: json.location
        })
      })
      .catch(error => console.log(error));
    }
    else {
      fetchCurrent(this.state.location)
      .then(response => response.json())
      .then(json => {
        this.setState({...this.state,
          weather: json.weather,
          location: json.location
        })
      })
      .catch(error => console.log(error));
    }
  }

  render() {
    return (
      <div className="App">
        <AppHeader splash={!this.state.weather.daily} />

        <main>
          <Search updateState={this.handleCurrentFetch} location={this.state.location} />
          <CurrentWeather state={this.state} updateState={this.handleCurrentFetch}/>
          <WeeklyTable weather={this.state.weather} fetchDated={this.fetchDated}/>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
