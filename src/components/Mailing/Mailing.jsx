import React from "react";
import classes from "./Mailing.module.css";
import RegistrationInput from "../../shared/UI/RegistrationInput/RegistrationInput";
import PlaceABetButton from "../../shared/UI/PlaceABetButton/PlaceABetButton";
import Checkbox from "./UI/Checkbox/Checkbox";

const Mailing = () => {
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>
        Будь в курсе новинок! Подпишись на рассылку!
      </h3>
      <div className={classes.form}>
        <RegistrationInput placeholder={"Имя"} />
        <RegistrationInput placeholder={"E-mail"} />
        <PlaceABetButton>Подписаться</PlaceABetButton>
        <Checkbox />
      </div>
      <img src={"/img/Frame 29.svg"} alt={""} />
    </div>
  );
};
export default Mailing;
