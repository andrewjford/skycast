import React from 'react';
import SearchForm from './SearchForm';

class Search extends React.Component {

  render() {
    return <div>
      <SearchForm handleSubmit={this.props.fetchCurrent}
        classProp={"horiz-search"}
      />
    </div>
  }
}

export default Search;
