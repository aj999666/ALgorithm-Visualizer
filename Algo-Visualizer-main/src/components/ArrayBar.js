import React, { Component } from "react";
import "./ArrayBar.css";

class ArrayBar extends Component {
  render() {
    return (
      <div
        className="array-bar"
        style={{
          height: `${this.props.value}px`,
        }}
      />
    );
  }
}

export default ArrayBar;
