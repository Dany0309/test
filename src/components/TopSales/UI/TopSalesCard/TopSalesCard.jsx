import React from "react";
import classes from "./TopSalesCard.module.css";

const TopSalesCard = ({
  stickerImg,
  profileImg,
  nameProfile,
  stickerName,
  stickerPrice,
  stickerPriceTransfer,
}) => {
  return (
    <div className={classes.container}>
      <img src={stickerImg} className={classes.sticker_img} alt={""} />
      <div className={classes.profile_info}>
        <img src={profileImg} className={classes.profile_img} alt={""} />
        <h2 className={classes.name_profile}>{nameProfile}</h2>
      </div>
      <h2 className={classes.sticker_name}>{stickerName}</h2>
      <div className={classes.sticker_price_info}>
        <h2 className={classes.sticker_price}>{stickerPrice}</h2>
        <h2 className={classes.sticker_price_transfer}>
          {stickerPriceTransfer}
        </h2>
      </div>
    </div>
  );
};

export default TopSalesCard;
