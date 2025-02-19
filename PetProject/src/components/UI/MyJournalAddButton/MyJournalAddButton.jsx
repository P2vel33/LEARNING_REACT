import React from "react";
import MyCardButton from "../MyCardButton/MyCardButton ";
import classes from "./MyJournalList.module.css";

const MyJournalAddButton = () => {
  return <MyCardButton className={classes.journal_add}>New task</MyCardButton>;
};

export default MyJournalAddButton;
