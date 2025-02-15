import React from "react";
import classes from "./MyCardButton.module.css";

const MyCardButton = ({ children }) => {
  return <button className={classes.card_button}>{children}</button>;
};

export default MyCardButton;
