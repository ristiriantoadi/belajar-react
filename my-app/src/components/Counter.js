import React, { Component, Fragment } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedCount: 0,
      color: "blue",
    };
  }

  increment() {
    this.setState((prevState) => ({
      clickedCount: prevState.clickedCount + 1,
    }));
  }

  toggleColor() {
    console.log(this.state.color);
    this.setState((prevState) => ({
      color: prevState.color === "blue" ? "red" : "blue",
    }));
  }

  render() {
    return (
      <Fragment>
        <h1>{this.state.clickedCount}</h1>
        <p style={{ color: this.state.color }}>Blue</p>
        <button
          onClick={(event) => {
            this.increment();
            this.toggleColor();
          }}
        >
          Count
        </button>
      </Fragment>
    );
  }
}

export default Counter;
