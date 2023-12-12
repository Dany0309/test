import React from "react";
import NavText from "./UI/NavText/NavText";
import NavButton from "./UI/NavButton/NavButton";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <img src={"./img/Vector.svg"} alt={""} />
      <nav className={classes.nav_text}>
        <NavText>Авторы</NavText>
        <NavText>Коллекции</NavText>
        <NavText>Сервисы</NavText>
      </nav>
      <NavButton>Кошелёк</NavButton>
    </div>
  );
};

export default Header;
