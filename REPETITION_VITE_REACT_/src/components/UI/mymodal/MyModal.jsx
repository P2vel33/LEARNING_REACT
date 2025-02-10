import React from "react";
import classes from "./MyModal.module.css";

const MyModal = ({ children, visiable, setVisiable }) => {
  const activeClasses = [classes.myModal];
  if (visiable) {
    activeClasses.push(classes.active);
  }
  return (
    <div className={activeClasses.join(" ")} onClick={() => setVisiable(false)}>
      <div
        className={classes.myModalContent}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
