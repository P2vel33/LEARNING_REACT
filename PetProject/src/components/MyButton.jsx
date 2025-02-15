import React from "react";
import classes from "./UI/MyButton/MyButton.module.css";
const MyButton = () => {
  return (
    <button className={`${classes.button} ${classes.accent}`}>Save</button>
  );
};

export default MyButton;
