import React from "react";
import classes from "./MyLeftPanel.module.css";

const MyLeftPanel = ({ children }) => {
  return <div className={classes.leftPanel}>{children}</div>;
};

export default MyLeftPanel;
