import React from 'react';
import SearchForm from './SearchForm';
import { fetchCurrent, fetchHistory } from '../services/BackendService';


class Search extends React.Component {

  getWeather = (address) => {
    fetchCurrent(address)
    .then(response => response.json())
    .then(json => {
      this.props.updateState(json);

      // add to localStorage
      if(localStorage.getItem('recent') === null){
        localStorage.setItem('recent', JSON.stringify([json.location]));
      }
      else {
        let array = JSON.parse(localStorage.getItem('recent'));
        array.unshift(json.location);
        if(array.length > 5){ array.pop() }
        localStorage.setItem('recent', JSON.stringify(array));
      }

      this.props.updateRecent();
    })
    .catch(error => console.log(error))
  }

  render() {
    if(this.props.location === ""){
      return <div>
        <SearchForm handleSubmit={this.getWeather}
          classProp={"center-search"}
        />
      </div>
    }
    else {
      return <div>
        <SearchForm handleSubmit={this.getWeather}
          classProp={"horiz-search"}
        />
      </div>
    }
  }
}

export default Search;
