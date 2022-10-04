import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sortActions } from "../../Store/Slices/sortSlice";
import { Slider, Select, MenuItem } from "@mui/material";
import ButtonStyles from "../ButtonStyle";

const Sortheader = (props) => {
  const dispatch = useDispatch();
  const sortMethod = useSelector((s) => s.sort.sortMethod);

  const onSortChangeHandler = (e) => {
    dispatch(sortActions.setSortMethod(e.target.value));
  };

  const onSizeChangeHandler = (e) => {
    dispatch(sortActions.setSize(e.target.value));
    props.generateArray();
  };

  const arrowForward = (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.67969 1.60547C6.32812 1.95703 6.36328 2.48438 6.67969 2.83594L10.9336 6.84375H0.84375C0.351562 6.84375 0 7.23047 0 7.6875V8.8125C0 9.30469 0.351562 9.65625 0.84375 9.65625H10.9336L6.67969 13.6992C6.36328 14.0508 6.36328 14.5781 6.67969 14.9297L7.45312 15.7031C7.80469 16.0195 8.33203 16.0195 8.64844 15.7031L15.5039 8.84766C15.8203 8.53125 15.8203 8.00391 15.5039 7.65234L8.64844 0.832031C8.33203 0.515625 7.80469 0.515625 7.45312 0.832031L6.67969 1.60547Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <>
      <div className="flex slider-container">
        <p className="slider-label">Size</p>
        <Slider
          aria-label="Temperature"
          defaultValue={100}
          min={30}
          max={100}
          color="secondary"
          onChange={onSizeChangeHandler}
        />
      </div>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        style={ButtonStyles}
        onClick={props.generateArray}
      >
        Generate new Array
      </Button>
      <Select
        className="selector"
        id="select-sorting-method"
        value={sortMethod}
        onChange={onSortChangeHandler}
      >
        <MenuItem value="merge" selected>
          Merge Sort
        </MenuItem>
        <MenuItem value="bubble">Bubble Sort</MenuItem>
        <MenuItem value="insertion">Insertion Sort</MenuItem>
        <MenuItem value="quick">Quick Sort</MenuItem>
      </Select>
      <Link className="flex" to="/path-finding-algos">
        <p style={{ marginRight: 10 }}>Path Finding Algorithms</p> {arrowForward}
      </Link>
    </>
  );
};

export default Sortheader;
