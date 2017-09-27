import React from 'react';
import momentjs from 'moment';
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
            let m = momentjs.unix(x);
            return m.format("h[\n]a");
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
