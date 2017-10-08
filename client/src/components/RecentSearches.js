import React from 'react';

class RecentSearches extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.fetchLocation(event.target.innerHTML);
  }

  render() {
    if(this.props.recent) {
      const array = this.props.recent.map((item, idx) => {
        return <li key={idx}>
          <a onClick={this.handleClick} href="" className="link">
            {item}
          </a>
        </li>
      })

      return <div className="recentSearches">
        <div>Recent Locations:</div>
        <ul>
          {array}
        </ul>
      </div>
    }

    else {
      return null;
    }
  }
}

export default RecentSearches;
