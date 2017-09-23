import React from 'react';

class SearchForm extends React.Component {

  constructor(){
    super();
    this.state = {
      input: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({input: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.input);
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <label>
        Location:
      </label>
      <input type="text" value={this.state.input} onChange={this.handleInputChange}/>
      <input type="submit" value="Find"/>
    </form>
  }
}

export default SearchForm;
