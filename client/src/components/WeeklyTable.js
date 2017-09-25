import React from 'react';
import Moment from 'react-moment';
import Skycons from 'react-skycons';

class WeeklyTable extends React.Component {

  constructor() {
    super();

    this.handleDayClick = this.handleDayClick.bind(this);
  }

  handleDayClick(event) {
    this.props.fetchDated(parseInt(event.target.dateTime)/1000);
  }

  render() {
    let days = null;

    if(this.props.weather.daily && this.props.weather.daily.data.length > 1){
      days = this.props.weather.daily.data.map((day, idx) => {
        let icon = day.icon.toUpperCase().replace(/-/g,"_");

        return <td key={idx}>
          <a onClick={this.handleDayClick}><Moment unix format='dddd'>{day.time}</Moment></a>
          <div><Moment unix format='MM/DD/YYYY'>{day.time}</Moment></div>
          <div>
            <Skycons color="#3c3c3c" icon={icon} autoplay={false}/>
          </div>
          <div>High: {Math.round(day.temperatureHigh)}˚F</div>
          <div>Low: {Math.round(day.temperatureLow)}˚F</div>
          <div>Precip: {Math.round(day.precipProbability * 100)}%</div>
        </td>
      })
    }

    return (
      <table>
        <tbody>
          <tr>
            {days}
          </tr>
        </tbody>
      </table>
    )
  }
}

export default WeeklyTable;
