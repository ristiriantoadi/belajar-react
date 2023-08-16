import React, { Component } from "react";

class ListElement extends Component {
  render() {
    return (
      <li key={this.props.index}>
        <input
          type="checkbox"
          checked={this.props.item.isDone}
          onClick={() => this.props.toggleDone(this.props.index)}
        />
        <span
          style={{
            textDecoration: this.props.item.isDone ? "line-through" : null,
          }}
        >
          {this.props.item.text}
        </span>
      </li>
    );
  }
}

export default ListElement;
