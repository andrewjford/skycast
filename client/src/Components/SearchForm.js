import React from 'react';

class SearchForm extends React.Component {
  render() {
    return <form>
      <label>
        Location:
      </label>
      <input type="text"/>
      <input type="submit" value="Find"/>
    </form>
  }
}

export default SearchForm;
