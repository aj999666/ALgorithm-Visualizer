import React, { useEffect, useState } from "react";
import "./Model.css";
import { Button } from "@mui/material";
import cancelIcon from "../../Assets/cancel.svg";

const Model = (props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [props.show]);

  let backdropClass = ["backdrop"];
  let modelClass = ["model"];

  if (!props.show) {
    backdropClass.push("hide");
    modelClass.push("hide");
  }

  const next = () => {
    if (index < props.modelData.length - 1) {
      setIndex(index + 1);
    } else {
      props.showModel(false);
    }
  };

  return (
    <>
      <div
        className={backdropClass.join(" ")}
        onClick={() => props.showModel(false)}
      />
      <div className={modelClass.join(" ")}>
        <img
          className="cancel-logo"
          src={cancelIcon}
          alt="cancel-icon"
          onClick={() => props.showModel(false)}
        />
        <p className="model-title">{props.modelData[index].title}</p>
        <ul>
          {props.modelData[index].list.map((el) => (
            <li>{el}</li>
          ))}
        </ul>
        <div className="button-container">
          <Button
            className="btn-secondary"
            disabled={index <= 0}
            onClick={() => setIndex(index - 1)}
          >
            Prev
          </Button>
          <Button className="btn-secondary" onClick={next}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default Model;
