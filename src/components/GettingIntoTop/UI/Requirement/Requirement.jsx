import React from "react";
import classes from "./Requirement.module.css";

const Requirement = ({ requirementText, requirementImg }) => {
  return (
    <div className={classes.container}>
      <img src={requirementImg} alt={""} />
      <h2 className={classes.text}>{requirementText}</h2>
    </div>
  );
};

export default Requirement;
