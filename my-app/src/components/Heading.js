import React, { Component } from "react";

class Heading extends Component {
  render() {
    return (
      <h1>
        {this.props.message} {this.props.number}
      </h1>
    );
  }
}

export default Heading;
