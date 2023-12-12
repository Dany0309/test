import React from "react";
import classes from "./Banner.module.css";
import BannerButtonBuy from "./UI/BannerButtonBuy/BannerButtonBuy";
import BeAuthorButton from "./UI/BeAuthorButton/BeAuthorButton";

const Banner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h2 className={classes.title}>
          Площадка для реализации криптостикеров
        </h2>
        <div className={classes.buttons}>
          <BannerButtonBuy>Купить</BannerButtonBuy>
          <BeAuthorButton>Стать автором</BeAuthorButton>
        </div>
      </div>
      <img src={"/img/stickers_hero.png"} alt={""} />
    </div>
  );
};

export default Banner;
