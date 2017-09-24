import React from 'react';
import LineChart from './LineChart';

class CurrentWeather extends React.Component {
  render() {

    if(this.props.state.current.daily){
      return (
        <div>
          <p>{this.props.state.location}</p>
          <p>{this.props.state.current.daily.summary}</p>
          <LineChart state={this.props.state}/>
        </div>
      )
    }
    else {
      return null;
    }
  }
}

export default CurrentWeather;
