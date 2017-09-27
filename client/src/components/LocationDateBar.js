import React from 'react';
import FullDate from './FullDate';

class LocationDateBar extends React.Component {

  constructor() {
    super();

    this.handleLocationClick = this.handleLocationClick.bind(this);
  }

  handleLocationClick() {
    this.props.fetchCurrent(this.props.state.location);
  }

  render() {
    return <div className='horiz-flex'>
        <h2 className='left-align'>
          <a onClick={this.handleLocationClick}>{this.props.state.location}</a>
        </h2>
        <h3 className='vert-flex left-align'>
          <FullDate date={this.props.state.weather.currently.time}
            time={this.props.state.weather.hourly.data.length > 24}/>
          {this.props.state.weather.hourly.summary}
        </h3>
      </div>
  }
}

export default LocationDateBar;
