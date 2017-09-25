import React from 'react';
import Skycons from 'react-skycons';
import DetailedInfo from './DetailedInfo';

class CurrentlyInfo extends React.Component {
  render() {
    // convert icon string to match with skycons library
    let icon = this.props.state.weather.currently.icon;
    icon = icon.toUpperCase().replace(/-/g,"_");

    const {temperature,
      apparentTemperature,
      } = this.props.state.weather.currently;

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
      <DetailedInfo weather={this.props.state.weather} />
    </div>
  }
}

export default CurrentlyInfo;
