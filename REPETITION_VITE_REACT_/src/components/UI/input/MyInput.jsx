import React from "react";
import classes from "./MyInput.module.css";

const MyInput = (props) => {
  return (
    <input
      className={classes.myInput}
      type="text"
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.xyi}
    ></input>
  );
};

export default MyInput;
