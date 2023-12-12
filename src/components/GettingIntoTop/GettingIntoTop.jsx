import React from "react";
import classes from "./GettingIntoTop.module.css";
import Requirement from "./UI/Requirement/Requirement";

const GettingIntoTop = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h2 className={classes.title_text}>Для попадания в топ необходимо:</h2>
        <Requirement
          requirementImg={"/img/collections.svg"}
          requirementText={"Минимум пять опубликованных работ"}
        />
        <Requirement
          requirementImg={"/img/insert_emoticon.svg"}
          requirementText={"Инвайт трём коллегам по цеху"}
        />
        <Requirement
          requirementImg={"/img/verified.svg"}
          requirementText={"Верифицированный аккаунт"}
        />
      </div>
      <img src={"/img/Frame 46.svg"} alt={""} />
    </div>
  );
};

export default GettingIntoTop;
