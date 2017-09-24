import React from 'react';
import SearchForm from './SearchForm';
import { fetchCurrent, fetchHistory } from '../services/BackendService';


class Search extends React.Component {

  getWeather = (address) => {
    fetchCurrent(address)
    .then(response => response.json())
    .then(json => this.props.updateState(json))
    .catch(error => console.log(error))
  }

  getHistory = (address, date) => {
    fetchHistory(address, Date.parse(date)/1000)
    .then(response => response.json())
    .then(json => this.props.updateState(json))
    .catch(error => console.log(error))
  }

  render() {
    return <div>
      <SearchForm handleSubmit={this.getWeather}
        handleHistorySubmit={this.getHistory}/>
    </div>
  }
}

export default Search;
