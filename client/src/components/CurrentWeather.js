import React from 'react';
import LineChart from './LineChart';
import CurrentlyInfo from './CurrentlyInfo';
import Moment from 'react-moment';

class CurrentWeather extends React.Component {
  render() {

    if(this.props.state.weather.daily){
      return (
        <div className="current-weather">
          <div className='vert-flex'>
            <div className='horiz-flex'>
              <h2 className='left-align'>{this.props.state.location}</h2>
              <h3 className='vert-flex left-align'>
                <Moment unix format="dddd, h:mma">
                  {this.props.state.weather.currently.time}
                </Moment>
                {this.props.state.weather.hourly.summary}
              </h3>
            </div>


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
