import React from 'react';
import Skycons from 'react-skycons';
import Moment from 'react-moment';

class CurrentlyInfo extends React.Component {
  render() {
    // convert icon string to match with skycons library
    let icon = this.props.state.weather.currently.icon;
    icon = icon.toUpperCase().replace(/-/g,"_");

    const {temperature,
      apparentTemperature,
      } = this.props.state.weather.currently;
    const {sunriseTime,
      sunsetTime,
      precipProbability,
      temperatureMax,
      temperatureMin,
      uvIndex,
      visibility
      } = this.props.state.weather.daily.data[0]

    return <div className="current-info">
      <div>
        <h2>
          {Math.round(temperature)}˚F
        </h2>
        <div>
          Feels like : {Math.round(apparentTemperature)}˚F
        </div>
      </div>
      <div className="weather-icon">
        <Skycons color="#3c3c3c" icon={icon} autoplay={true}/>
      </div>
      <ul>
        <li>High: {Math.round(temperatureMax)}˚F</li>
        <li>Low: {Math.round(temperatureMin)}˚F</li>
        <li>Precipitation: {Math.round(precipProbability * 100)}%</li>
        <li>UV Index: {uvIndex}</li>
        <li>Visibility: {visibility}</li>
        <li>Sunrise: <Moment unix format="h:mm a">{sunriseTime}</Moment></li>
        <li>Sunset: <Moment unix format="h:mm a">{sunsetTime}</Moment></li>
      </ul>
    </div>
  }
}

export default CurrentlyInfo;
