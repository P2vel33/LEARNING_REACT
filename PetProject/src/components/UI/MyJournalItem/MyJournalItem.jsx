import React from "react";
import classes from "./MyJournalItem.module.css";

const MyJournalItem = (props) => {
  const formatedDate = new Intl.DateTimeFormat("ru-RU").format(props.date);

  return (
    <>
      <h2 className={classes.journal_item__header}>{props.title}</h2>
      <h2 className={classes.journal_item__body}>
        <div className={classes.journal_item__date}>{formatedDate}</div>
        <div className={classes.journal_item__text}>{props.text}</div>
      </h2>
    </>
  );
};

export default MyJournalItem;
