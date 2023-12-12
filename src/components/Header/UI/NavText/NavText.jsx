import React from "react";
import classes from "./NavText.module.css";

const NavText = ({ children }) => {
  return <h2 className={classes.text}>{children}</h2>;
};

export default NavText;
