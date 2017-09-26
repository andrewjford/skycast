import React from 'react';
import LineChart from './LineChart';
import CurrentlyInfo from './CurrentlyInfo';
import { fetchCurrent, fetchHistory } from '../services/BackendService';
import FullDate from './FullDate';

class CurrentWeather extends React.Component {

  constructor() {
    super();

    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleForwardClick = this.handleForwardClick.bind(this);
    this.fetchDated = this.fetchDated.bind(this);
    this.getForecast = this.getForecast.bind(this);
  }

  handleBackClick() {
    let prevDate = this.props.state.weather.currently.time - 86400;
    this.fetchDated(prevDate)
  }

  handleForwardClick() {
    let nextDate = this.props.state.weather.currently.time + 86400;
    this.fetchDated(nextDate);
  }

  fetchDated(date) {
    if(date){
      fetchHistory(this.props.state.location, date)
      .then(response => response.json())
      .then(json => this.props.updateState(json))
      .catch(error => console.log(error));
    }
    else {
      fetchCurrent(this.props.state.location)
      .then(response => response.json())
      .then(json => this.props.updateState(json))
      .catch(error => console.log(error));
    }
  }

  getForecast() {
    this.fetchDated(null);
  }

  render() {

    if(this.props.state.weather.daily){
      return (
        <div className="current-weather">
          <div className='vert-flex'>
            <div className='horiz-flex'>
              <h2 className='left-align'>
                <a onClick={this.getForecast}>{this.props.state.location}</a>
              </h2>
              <h3 className='vert-flex left-align'>
                <FullDate date={this.props.state.weather.currently.time}
                  time={this.props.state.weather.hourly.data.length > 24}/>
                {this.props.state.weather.hourly.summary}
              </h3>
            </div>


            <CurrentlyInfo state={this.props.state}/>
          </div>
          <div className="chart">
            <button onClick={this.handleBackClick}>&lt;</button>
            <LineChart state={this.props.state}/>
            <button onClick={this.handleForwardClick}>&gt;</button>
          </div>
        </div>
      )
    }
    else {
      return null;
    }
  }
}

export default CurrentWeather;
