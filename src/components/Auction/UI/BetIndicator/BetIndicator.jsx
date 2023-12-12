import React from "react";
import classes from "./BetIndicator.module.css";

const BetIndicator = () => {
  return (
    <div className={classes.content__bet_container}>
      <p>Ставка:</p>
      <h2>0.10 ETH</h2>
      <h4>$351.24</h4>
    </div>
  );
};

export default BetIndicator;
