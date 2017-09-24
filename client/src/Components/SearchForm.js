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
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleHistorySubmit = this.handleHistorySubmit.bind(this);
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.location);
    this.setState({location: ""});
  }

  handleDateChange(event) {
    this.setState({date: event.target.value});
  }

  handleHistorySubmit(event) {
    event.preventDefault();
    if(this.state.date !== ""){
      this.props.handleHistorySubmit(this.state.location, this.state.date);
    }
  }

  render() {
    return <form onSubmit={this.handleSubmit} className="center-search">
      <label>
        Enter a Location:
      </label>
      <input type="text" value={this.state.location} placeholder="... Maui"
        onChange={this.handleLocationChange}/>
      <input type="date" value={this.state.date} onChange={this.handleDateChange}/>
      <div>
        <button type="submit">Current</button>
        <button onClick={this.handleHistorySubmit}>Historical</button>
      </div>
    </form>
  }
}

export default SearchForm;
