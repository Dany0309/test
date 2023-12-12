import React from "react";
import classes from "./BeAuthorButton.module.css";

const BeAuthorButton = ({ children }) => {
  return (
    <button className={classes.container}>
      <p className={classes.text}>{children}</p>
    </button>
  );
};

export default BeAuthorButton;
