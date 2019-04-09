import React from 'react';

export default (props) => ( 
  <div 
    style={{
      textDecoration: props.todo.complete ?"Line-through" : ""
    }}
    key={props.index} 
    onClick={props.toggleComplete} 
  >
    {props.text}
  </div>
);
