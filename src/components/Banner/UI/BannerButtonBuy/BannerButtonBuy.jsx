import React from "react";
import classes from "./BannerButtonBuy.module.css";

const BannerButtonBuy = ({ children }) => {
  return (
    <button className={classes.container}>
      <p className={classes.text}>{children}</p>
    </button>
  );
};

export default BannerButtonBuy;
