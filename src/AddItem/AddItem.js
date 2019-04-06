import React, { Component } from 'react';


class AddItem extends Component {
  render() {
    return (
      <div className="AddItem">
        <input type="text" placeholder="What do you need to do...?" />
        <input type="text" placeholder="Description" />
        <input type="date" />
        <br/>
        <button>Add Item</button>
      </div>
    );
  }
}

export default AddItem;