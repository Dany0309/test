import React from "react";
import classes from "./StickerSliderCount.module.css";

const StickerSliderCount = ({ count }) => {
  return (
    <button className={classes.container}>
      <p className={classes.text}> {count} </p>
    </button>
  );
};

export default StickerSliderCount;
