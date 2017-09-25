import React from 'react';

import { VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
} from 'victory';

class LineChart extends React.Component {
  render() {
    return (
      <VictoryChart theme={VictoryTheme.material}
        height={175}
        >
        <VictoryAxis
          tickCount={8}
          tickFormat={(x) => {
            let date = new Date(x*1000);
            let hour = date.getHours();
            if(hour > 12){
              hour -= 12;
              return `${hour}\nPM`;
            }
            else if(hour === 12){
              return "12\nPM"
            }
            else if(hour === 0){
              return "12\nAM"
            }
            else {
              return `${hour}\nAM`
            }
          }}
        />
        <VictoryAxis
          dependentAxis
          tickCount={4}
          tickFormat={(x) => `${x}˚`}
        />
        <VictoryLine
          data={this.props.state.weather.hourly.data}
          x="time"
          y="temperature"
        />
      </VictoryChart>
    )
  }
}

export default LineChart;
