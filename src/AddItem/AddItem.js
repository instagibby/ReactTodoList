import React, { Component } from 'react';

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      description: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }; 
  
   handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      description: this.state.description,
      complete: false
    });
    this.setState({
      description : ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input 
          name="description" 
          placeholder="Description" 
          value={this.state.description}
          onChange={this.handleChange}
          size="25"
          />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.handleSubmit}>Add Todo</button>
      </form>
    );
  }
}
