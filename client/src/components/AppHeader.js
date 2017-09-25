import React from 'react';

const AppHeader = (props) => {
  if(props.splash){
    return <header className="splash-margin">
      <h1>Skycast</h1>
    </header>
  }
  else {
    return <header>
      <h1>Skycast</h1>
    </header>
  }
}

export default AppHeader;
