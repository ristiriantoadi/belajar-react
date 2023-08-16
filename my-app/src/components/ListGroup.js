import React, { Component, Fragment } from "react";
import Heading from "./Heading";
import ListElement from "./ListElement";

class ListGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      todos: [
        { text: "something", isDone: false },
        { text: "something2", isDone: true },
        { text: "something3", isDone: false },
      ],
    };

    this.reset = this.reset.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
  }

  changeSelectedIndex(index) {
    this.setState((prevState) => ({
      selectedIndex: index,
    }));
  }

  toggleDone(index) {
    //make shallow copy of the array
    let todos = [...this.state.todos];
    todos = todos.map((todo, indexItem) => {
      if (index === indexItem) {
        todo.isDone = todo.isDone ? false : true;
      }
      return todo;
    });
    this.setState((prevState) => ({
      todos,
    }));
  }

  reset() {
    let todos = [...this.state.todos];
    todos = todos.map((todo) => ({ isDone: false, text: todo.text }));
    this.setState((prevState) => ({
      todos,
    }));
  }

  render() {
    return (
      <Fragment>
        <h1>List</h1>
        <ul>
          {this.state.todos.map((item, index) => (
            <ListElement
              index={index}
              item={item}
              toggleDone={this.toggleDone}
            />
          ))}
        </ul>
        <button onClick={this.reset}>reset</button>
        <Heading message="Hello WOrld" number={10}></Heading>
      </Fragment>
    );
  }
}

export default ListGroup;
