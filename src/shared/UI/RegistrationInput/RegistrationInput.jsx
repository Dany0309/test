import React from "react";
import classes from "./RegistrationInput.module.css";

const RegistrationInput = ({ placeholder }) => {
  return <input className={classes.container} placeholder={placeholder} />;
};

export default RegistrationInput;
