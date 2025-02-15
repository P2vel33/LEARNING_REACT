import React from "react";
import classes from "./MyJournalItem.module.css";

const MyJournalItem = (props) => {
  return (
    <div className={classes.journal_item}>
      <h2 className={classes.journal_item__header}>{props.title}</h2>
      <h2 className={classes.journal_item__body}>
        <div className={classes.journal_item__date}>
          {props.date.toString()}
        </div>
        <div className={classes.journal_item__text}>{props.text}</div>
      </h2>
    </div>
  );
};

export default MyJournalItem;
