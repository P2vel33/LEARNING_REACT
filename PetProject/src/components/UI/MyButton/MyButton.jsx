import React from "react";
import classes from "./MyButton.module.css";
const MyButton = () => {
  const clicked = () => {
    console.log("Hi");
  };

  return (
    <button onClick={clicked} className={`${classes.button} ${classes.accent}`}>
      Save
    </button>
  );
};

export default MyButton;
