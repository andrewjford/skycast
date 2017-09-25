import React from 'react';

class SearchForm extends React.Component {

  constructor(){
    super();
    this.state = {
      location: "",
      date: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.location);
    this.setState({location: ""});
  }

  render() {
    return <form onSubmit={this.handleSubmit} className="center-search">
      <label>
        Enter a Location:
      </label>
      <input type="text" value={this.state.location} placeholder="... Maui"
        onChange={this.handleLocationChange}/>
      <div>
        <button type="submit">Forecast</button>
      </div>
    </form>
  }
}

export default SearchForm;
