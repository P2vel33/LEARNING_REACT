import React, { useState } from "react";
import classes from "./MyButton.module.css";
const MyButton = () => {
  const [text, setText] = useState("Save");

  const clicked = () => {
    setText("Close");
    console.log("button");
  };

  return (
    <button onClick={clicked} className={`${classes.button} ${classes.accent}`}>
      {text}
    </button>
  );
};

export default MyButton;
