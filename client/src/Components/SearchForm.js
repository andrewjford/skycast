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
    this.setState({input: ""});
  }

  render() {
    return <form onSubmit={this.handleSubmit} className="center-search">
      <label>
        Enter a Location:
      </label>
      <input type="text" value={this.state.input} placeholder="... Maui"
        onChange={this.handleInputChange}/>
      <button type="submit">Find</button>
    </form>
  }
}

export default SearchForm;
