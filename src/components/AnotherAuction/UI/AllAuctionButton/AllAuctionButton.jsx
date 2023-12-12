import React from "react";
import classes from "./AllAuctionButton.module.css";

const AllAuctionButton = ({ children }) => {
  return (
    <button className={classes.container}>
      <p className={classes.text}>{children}</p>
    </button>
  );
};

export default AllAuctionButton;
