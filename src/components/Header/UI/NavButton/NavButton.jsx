import React from "react";
import classes from "./NavButton.module.css";

const NavButton = ({ children }) => {
  return (
    <button className={classes.container}>
      <p className={classes.text}>{children}</p>
    </button>
  );
};

export default NavButton;
