import React from "react";
import classes from "./MyJournalItem.module.css";

const MyJournalItem = () => {
  const title = "Learn";
  const date = new Date();
  const text = "Text";

  return (
    <div className={classes.journal_item}>
      <h2 className={classes.journal_item__header}>{title}</h2>
      <h2 className={classes.journal_item__body}>
        <div className={classes.journal_item__date}>{date.toString()}</div>
        <div className={classes.journal_item__text}>{text}</div>
      </h2>
    </div>
  );
};

export default MyJournalItem;
