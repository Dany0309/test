import React from "react";
import classes from "./Attach.module.css";

const Attach = ({ styles }) => {
  return (
    <div className={classes.container} style={styles}>
      <div className={classes.content}>
        <div className={classes.circle}>
          <div className={classes.plus}>+</div>
        </div>
        <p className={classes.attach_text}>Прикрепить работы (.jpeg / .png)</p>
      </div>
    </div>
  );
};

export default Attach;
