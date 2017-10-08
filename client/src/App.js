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
    // load initial display based on most recent, defaults to Seattle
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
      // update local storage
      setLocalStorage(json);

      // update state.recent
      this.getRecentSearches();

      // update state weather/location
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
        <AppHeader />

        <main>
          <Search fetchCurrent={this.fetchLocation}/>
          <RecentSearches recent={this.state.recent} fetchLocation={this.fetchLocation}/>
          <CurrentWeather state={this.state}
            updateState={this.handleCurrentFetch}
            fetchDated={this.fetchDated}
            fetchLocation={this.fetchLocation} />
          <WeeklyTable weather={this.state.weather} fetchDated={this.fetchDated}/>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
