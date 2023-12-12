import React from "react";
import classes from "./NewStickers.module.css";
import StickerSliderCount from "./UI/StickerSliderCount/StickerSliderCount";
import Slider from "./UI/Slider/Slider";

const NewStickers = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <img src={"/img/image 1367.svg"} alt={""} />
        <h1 className={classes.title_text}>Новые стикеры</h1>
      </div>
      <Slider
        slideOne={"/img/Ghost-2.svg"}
        slideTwo={"/img/Ghost-1.svg"}
        slideThree={"/img/Parental Advisory 1.svg"}
      />
      <div className={classes.counters}>
        <StickerSliderCount count={1} />
        <StickerSliderCount count={2} />
        <StickerSliderCount count={3} />
        <StickerSliderCount count={4} />
      </div>
    </div>
  );
};

export default NewStickers;
