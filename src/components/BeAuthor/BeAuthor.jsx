import React from "react";
import classes from "./BeAuthor.module.css";
import Attach from "./UI/Attach/Attach";
import PlaceABetButton from "../../shared/UI/PlaceABetButton/PlaceABetButton";
import Input from "./UI/Input/Input";

const BeAuthor = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Стать автором</h1>
      <h2 className={classes.subtitle}>
        Если ты художник или стремишься им стать — добро пожаловать к нам!
      </h2>
      <p className={classes.paragraph}>
        Отправь нам от трёх до пяти своих работ и напиши свой ник в телеграмме.
        Если наши кураторы решат, что нам по пути, то мы обязательно свяжемся с
        тобой и обговорим условия сотрудничества! <b>Удачи!</b>
      </p>
      <img src={"/img/Frame 31.svg"} alt={""} />
      <Attach styles={{ gridRow: " 1 / span 3" }} />
      <Input
        styles={{ gridColumnStart: "2", gridRowStart: "4", marginTop: "120px" }}
        placeholder={"@telegram_nickname"}
      />
      <PlaceABetButton
        styles={{ gridColumnStart: "2", gridRowStart: "4", marginTop: "220px" }}
      >
        Отправить
      </PlaceABetButton>
    </div>
  );
};

export default BeAuthor;
