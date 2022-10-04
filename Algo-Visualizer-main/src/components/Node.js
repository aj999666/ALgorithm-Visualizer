import React, { Component } from "react";

import "./Node.css";
import startIcon from "../Assets/start.svg";
import finishIcon from "../Assets/end.svg";

export default class Node extends Component {
  render() {
    const {
      col,
      isFinish,
      isStart,
      isWall,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
      row,
    } = this.props;
    const extraClassName = isWall ? "node-wall" : "";

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}
      >
        {isStart ? (
          <img src={startIcon} />
        ) : isFinish ? (
          <img src={finishIcon} />
        ) : (
          ""
        )}
      </div>
    );
  }
}
