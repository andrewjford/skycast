import React from 'react';
import SearchForm from './SearchForm';
import { fetchCurrent } from '../services/BackendService';

class Search extends React.Component {

  constructor(){
    super();

    this.state = {
      value: ""
    }
  }

  getWeather = (address) => {
    fetchCurrent(address)
    .then(response => response.json())
    .then(json => this.setState({value: json}))
    .catch(error => console.log(error))

  }

  render() {

    if(this.state.value !== ""){
      return <div>
        <SearchForm handleSubmit={this.getWeather}/>
        <p>{this.state.value.daily.summary}</p>
      </div>
    }
    return <div>
      <SearchForm handleSubmit={this.getWeather}/>
    </div>
  }
}

export default Search;
