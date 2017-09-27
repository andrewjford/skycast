import React from 'react';

const Loading = (props) => {

  const Spinner = require('react-spinkit');

  return <div style={{position:'absolute'}} className="loading">
    <Spinner name='ball-triangle-path' color='black' />
  </div>

}

export default Loading;
