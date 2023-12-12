import React from "react";
import classes from "./Input.module.css";

const Input = ({ placeholder, styles }) => {
  return <input placeholder={placeholder} className={classes} style={styles} />;
};

export default Input;
