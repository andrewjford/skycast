import React from 'react';

class RecentSearches extends React.Component {
  render() {
    if(this.props.recent){
      const array = this.props.recent.map((item, idx) => {
        return <li key={idx}>{item}</li>
      })


      return <div className="recentSearches">
        Recent Locations:
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
