import React from "react";
import classes from "./Card.module.css";

const Card = ({
  stickerImg,
  profileImg,
  nameProfile,
  stickerName,
  stickerPrice,
  stickerTime,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.top_part}>
        <img className={classes.sticker} src={stickerImg} alt={""} />
      </div>
      <div className={classes.bottom_part}>
        <div className={classes.profile_info}>
          <img className={classes.avatar} src={profileImg} alt={""} />
          <p className={classes.name_profile}> {nameProfile}</p>
        </div>
        <div className={classes.sticker_info}>
          <h2 className={classes.sticker_name}> {stickerName} </h2>
          <h3 className={classes.sticker_price}> {stickerPrice} </h3>
          <h4 className={classes.sticker_time}> {stickerTime} </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
