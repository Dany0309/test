import React from "react";
import classes from "./TimerIndicator.module.css";

const TimerIndicator = () => {
  return (
    <div className={classes.content__ending_box}>
      <h2>Окончание через:</h2>
      <div className={classes.content__ending_box_timer}>
        <h3>01</h3>
        <h3>48</h3>
        <h3>47</h3>
        <p>Час</p>
        <p>Мин</p>
        <p>Сек</p>
      </div>
    </div>
  );
};

export default TimerIndicator;
