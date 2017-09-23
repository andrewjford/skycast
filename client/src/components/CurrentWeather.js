import React from 'react';

class CurrentWeather extends React.Component {
  render() {
    if(this.props.state.daily){
      return (
        <div>
          <p>{this.props.state.daily.summary}</p>
        </div>
      )
    }
    else {
      return null;
    }
  }
}

export default CurrentWeather;
