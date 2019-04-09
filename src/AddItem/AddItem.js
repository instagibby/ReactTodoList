import React, { Component } from 'react';

export default class AddItem extends Component {
  state = {
    text: ""
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }; 
  
   handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      text: this.state.text,
      description: this.state.description,
      complete: false
    });
    this.setState({
      text: "",
      description : ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input 
          name="text" 
          placeholder="What do you need to do...?" 
          value={this.state.text} 
          onChange={this.handleChange} />
        <input 
          name="description" 
          placeholder="Description" 
          value={this.state.description}
          onChange={this.handleChange}
          />
        <button onClick={this.handleSubmit}>Add Todo</button>
      </form>
    );
  }
}
