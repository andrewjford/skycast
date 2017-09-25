import React from 'react';
import LineChart from './LineChart';
import CurrentlyInfo from './CurrentlyInfo';

class CurrentWeather extends React.Component {
  render() {

    if(this.props.state.weather.daily){
      return (
        <div>
          <div className='vert-flex'>
            <h3>{this.props.state.location}</h3>
            {this.props.state.weather.daily.summary}
            hello
            <CurrentlyInfo state={this.props.state}/>
          </div>
          <div className="chart">
            <LineChart state={this.props.state}/>
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
