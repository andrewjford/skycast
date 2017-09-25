import React from 'react';
import Moment from 'react-moment';
import Skycons from 'react-skycons';

class WeeklyTable extends React.Component {
  render() {
    let days = null;

    if(this.props.weather.daily){
      days = this.props.weather.daily.data.map((day, idx) => {
        let icon = day.icon.toUpperCase().replace(/-/g,"_");

        return <td key={idx}>
          <strong><Moment unix format='dddd'>{day.time}</Moment></strong>
          <div><Moment unix format='MM/DD/YYYY'>{day.time}</Moment></div>
          <div>
            <Skycons color="#3c3c3c" icon={icon} autoplay={false}/>
          </div>
          <div>High: {Math.round(day.temperatureHigh)}˚F</div>
          <div>Low: {Math.round(day.temperatureLow)}˚F</div>
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
