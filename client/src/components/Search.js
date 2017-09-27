import React from 'react';
import SearchForm from './SearchForm';
import { fetchCurrent } from '../services/BackendService';
import { setLocalStorage } from '../services/LocalStorage';

class Search extends React.Component {

  getWeather = (address) => {
    fetchCurrent(address)
    .then(response => response.json())
    .then(json => {
      this.props.updateState(json);

      // add to localStorage
      setLocalStorage(json);

      this.props.updateRecent();
    })
    .catch(error => console.log(error))
  }

  render() {
    return <div>
      <SearchForm handleSubmit={this.getWeather}
        classProp={"horiz-search"}
      />
    </div>
  }
}

export default Search;
