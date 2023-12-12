import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <img src={"/img/Vector.svg"} alt={""} />
      <div className={classes.text}>
        <h2>Соглашение</h2>
        <h2>Лицензия</h2>
        <h2>FAQ</h2>
      </div>
    </div>
  );
};

export default Footer;
