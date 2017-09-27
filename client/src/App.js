import React, { Component } from 'react';
import './App.css';

import { fetchCurrent, fetchHistory } from './services/BackendService';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import WeeklyTable from './components/WeeklyTable';
import Footer from './components/Footer';
import AppHeader from './components/AppHeader';
import RecentSearches from './components/RecentSearches';
import { setLocalStorage } from './services/LocalStorage';

class App extends Component {
  constructor(){
    super();

    this.state = {
      weather: "",
      location: "",
      recent: JSON.parse(localStorage.getItem('recent'))
    }

    this.handleCurrentFetch = this.handleCurrentFetch.bind(this);
    this.fetchDated = this.fetchDated.bind(this);
    this.getRecentSearches = this.getRecentSearches.bind(this);
    this.fetchLocation = this.fetchLocation.bind(this);
  }

  handleCurrentFetch(json) {
    this.setState({...this.state,
      weather: json.weather,
      location: json.location
    })
  }

  componentDidMount() {
    if(this.state.recent && this.state.recent[0]){
      this.fetchLocation(this.state.recent[0]);
    }
    else {
      this.fetchLocation("Seattle, WA");
    }
  }

  getRecentSearches() {
    this.setState({...this.state,
      recent: JSON.parse(localStorage.getItem('recent'))
    })
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

  fetchLocation(location) {
    fetchCurrent(location)
    .then(response => response.json())
    .then(json => {
      setLocalStorage(json);
      this.getRecentSearches();

      this.setState({...this.state,
        weather: json.weather,
        location: json.location
      })
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <AppHeader splash={!this.state.weather.daily} />

        <main>
          <Search updateState={this.handleCurrentFetch}
            location={this.state.location}
            updateRecent={this.getRecentSearches}
          />
          <RecentSearches recent={this.state.recent} fetchLocation={this.fetchLocation}/>
          <CurrentWeather state={this.state} updateState={this.handleCurrentFetch}/>
          <WeeklyTable weather={this.state.weather} fetchDated={this.fetchDated}/>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
