import React from "react";
import classes from "./MyCardButton.module.css";

const MyCardButton = ({ children, className }) => {
  const cl = className ? className : "";
  return <button className={`${classes.card_button} ${cl}`}>{children}</button>;
};

export default MyCardButton;
