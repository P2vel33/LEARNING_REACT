import React from "react";
import classes from "./MyJournalList.module.css";

const MyJournalList = ({ children }) => {
  return <div className={classes.journal_list}>{children}</div>;
};

export default MyJournalList;
