import React from 'react';

const CurrentTemp = (props) => {
  return (
    <div>
      <h2>
        {Math.round(props.temperature)}˚F
      </h2>
      <div>
        Feels like : {Math.round(props.apparentTemperature)}˚F
      </div>
    </div>
  )
}

export default CurrentTemp;
