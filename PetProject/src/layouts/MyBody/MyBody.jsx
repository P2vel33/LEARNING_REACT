import React from "react";
import classes from "./MyBody.module.css";

const MyBody = ({ children }) => {
  return <div className={classes.body}>{children}</div>;
};

export default MyBody;
