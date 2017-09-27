import React from 'react';
import LineChart from './LineChart';
import WeatherInfo from './WeatherInfo';
import Loading from './Loading';
import LocationDateBar from './LocationDateBar';

class CurrentWeather extends React.Component {

  constructor() {
    super();

    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleForwardClick = this.handleForwardClick.bind(this);
  }

  handleBackClick() {
    let prevDate = this.props.state.weather.currently.time - 86400;
    this.props.fetchDated(prevDate);
  }

  handleForwardClick() {
    let nextDate = this.props.state.weather.currently.time + 86400;
    this.props.fetchDated(nextDate);
  }

  render() {
    if(this.props.state.weather.daily){
      return (
        <div className="current-weather">
          <div className='vert-flex'>
            <LocationDateBar state={this.props.state}
              fetchCurrent={this.props.fetchLocation} />
            <WeatherInfo state={this.props.state}/>
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
      return <Loading />;
    }
  }
}

export default CurrentWeather;
