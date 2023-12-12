import React from "react";
import classes from "./Slider.module.css";

const Slider = ({ slideOne, slideTwo, slideThree }) => {
  return (
    <div className={classes.container}>
      <img src={slideOne} alt={""} />
      <img src={slideTwo} alt={""} />
      <img src={slideThree} alt={""} />
    </div>
  );
};

export default Slider;
