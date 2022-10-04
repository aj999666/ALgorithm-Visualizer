import React from "react";
import "./ArrayBars.css";
import { useSelector } from "react-redux";

import ArrayBar from "./ArrayBar";

const ArrayBars = (props) => {
  const sizeOfArray = useSelector((s) => s.sort.size);
  const styles = {
    display: "grid",
    gridTemplateColumns: `repeat(${sizeOfArray}, 1fr)`,
    gridGap: 3,
  };

  return (
    <div className={"array-container"} style={styles}>
      {props.data.map((value, id) => {
        return <ArrayBar key={id} value={value} />;
      })}
    </div>
  );
};

export default ArrayBars;
