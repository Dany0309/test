import React from "react";
import classes from "./Auction.module.css";
import PlaceABetButton from "../../shared/UI/PlaceABetButton/PlaceABetButton";
import Profile from "./UI/Profile/Profile";
import BetIndicator from "./UI/BetIndicator/BetIndicator";
import TimerIndicator from "./UI/TimerIndicator/TimerIndicator";

const Auction = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>Аукцион</h1>
        <img src={"./img/Frame 2.png"} alt={""} />
      </div>
      <div className={classes.content}>
        <img
          src={"/img/Witcher-3 1.jpg"}
          className={classes.sticker_img}
          alt={""}
        />

        <Profile />

        <h2 className={classes.sticker_name}>Witcherrr_3 (xml_t5)</h2>

        <div className={classes.row}>
          <BetIndicator />
          <TimerIndicator />
        </div>

        <PlaceABetButton styles={{ gridRowStart: "4", gridColumnStart: "2" }}>
          Сделать ставку
        </PlaceABetButton>
      </div>
    </div>
  );
};

export default Auction;
