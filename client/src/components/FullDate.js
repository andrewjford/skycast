import React from 'react';
import Moment from 'react-moment';

const FullDate = (props) => {
  if(props.time){
    return <Moment unix format="dddd, h:mma - M/DD/YYYY">
      {props.date}
    </Moment>
  }
  else {
    return <Moment unix format="dddd, M/DD/YYYY">
      {props.date}
    </Moment>
  }
}

export default FullDate;
