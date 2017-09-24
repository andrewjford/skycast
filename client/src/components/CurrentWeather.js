import React from 'react';

class CurrentWeather extends React.Component {
  render() {
    if(this.props.state.current.daily){
      return (
        <div>
          <p>{this.props.state.location}</p>
          <p>{this.props.state.current.daily.summary}</p>
        </div>
      )
    }
    else {
      return null;
    }
  }
}

export default CurrentWeather;
