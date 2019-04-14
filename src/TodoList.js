import React, { Component } from 'react';
import Nav from './Nav/Nav.js';
import AddItem from './AddItem/AddItem.js';
import ItemsDisplay from './ItemsDisplay/ItemsDisplay.js';
import './App.css';



class TodoList extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      todos: [] 
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }
  
  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    })
  }
  
  toggleComplete = (indexToUpdate) => {
    this.setState({
      todos: this.state.todos.map((todo, index) => {
        if (index === indexToUpdate) {
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };
  render() {
    return (
      <div>
        <Nav />
        <AddItem onSubmit={this.addTodo} />
        {this.state.todos.map((todo, index) => (
          <ItemsDisplay 
          key={index}
          todo={todo}
          description={todo.description}
          toggleComplete={() => this.toggleComplete(index)}
          />
        ))}
      </div>
      
    );
  }
}

export default TodoList;
