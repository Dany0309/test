import React, { useState } from "react";
import classes from "./Checkbox.module.css";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked((prevState) => !prevState);
  }

  return (
    <div className={classes.container}>
      <label className={classes.checkbox}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className={classes.checkmark}></span>
        <div className={classes.checkbox__text}>
          Согласен на обработку персональных данных
        </div>
      </label>
    </div>
  );
};

export default Checkbox;
