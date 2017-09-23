import React from 'react';
import SearchForm from './SearchForm';
import { fetchCurrent } from '../services/BackendService';

class Search extends React.Component {

  getWeather = (address) => {
    fetchCurrent(address)
    .then(response => response.json())
    .then(json => this.props.parentThis.setState({...this.props.state, current: json}))
    .catch(error => console.log(error))
  }

  render() {
    return <div>
      <SearchForm handleSubmit={this.getWeather}/>
    </div>
  }
}

export default Search;
