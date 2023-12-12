import React from "react";
import classes from "./PlaceABetButton.module.css";

const PlaceABetButton = ({ children, styles }) => {
  return (
    <button className={classes.container} style={styles}>
      <p className={classes.text}>{children}</p>
    </button>
  );
};

export default PlaceABetButton;
