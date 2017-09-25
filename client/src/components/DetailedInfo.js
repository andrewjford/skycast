import React from 'react';
import Moment from 'react-moment';

class DetailedInfo extends React.Component {
  render() {
    const {sunriseTime,
      sunsetTime,
      precipProbability,
      temperatureHigh,
      temperatureLow,
      uvIndex,
      visibility
      } = this.props.weather.daily.data[0]

    return (
      <ul>
        <li>High: {Math.round(temperatureHigh)}˚F</li>
        <li>Low: {Math.round(temperatureLow)}˚F</li>
        <li>Precipitation: {Math.round(precipProbability * 100)}%</li>
        <li>UV Index: {uvIndex}</li>
        <li>Visibility: {visibility}</li>
        <li>Sunrise: <Moment unix format="h:mm a">{sunriseTime}</Moment></li>
        <li>Sunset: <Moment unix format="h:mm a">{sunsetTime}</Moment></li>
      </ul>
    )
  }
}

export default DetailedInfo;
