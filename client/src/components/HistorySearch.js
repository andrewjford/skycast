import React from 'react';
import SearchForm from './SearchForm.js';
import { fetchHistory } from '../services/BackendService';

class HistorySearch extends React.Component {

  getWeather = (address, date) => {
    fetchHistory(address, date)
    .then(response => response.json())
    .then(json => this.props.updateState(json))
    .catch(error => console.log(error))
  }

  render() {
    return <div>
      <SearchForm handleSubmit={this.getWeather}/>
    </div>
  }
}

export default HistorySearch;
