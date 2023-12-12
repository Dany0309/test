import React from "react";
import classes from "./AnotherAuction.module.css";
import Card from "./UI/Card/Card";
import AllAuctionButton from "./UI/AllAuctionButton/AllAuctionButton";

const AnotherAuction = () => {
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>Другие аукционы</h3>
      <div className={classes.content}>
        <Card
          stickerImg={"/img/Alien.svg"}
          profileImg={"/img/Ellipse 2 (1).svg"}
          nameProfile={"Frank.Nagval"}
          stickerName={"Alien (green) e_e"}
          stickerPrice={"0.02 ETH"}
          stickerTime={"03 часа 25 мин 23 сек"}
        />
        <Card
          stickerImg={"/img/cobra_007.svg"}
          profileImg={"/img/Ellipse 2.svg"}
          nameProfile={"CPH_777"}
          stickerName={"CoBRRRa"}
          stickerPrice={"0.5 ETH"}
          stickerTime={"15 мин 03 сек"}
        />
        <Card
          stickerImg={"/img/Diamonds.svg"}
          profileImg={"/img/Ellipse 2 (2).svg"}
          nameProfile={"sUpah_kiLLah"}
          stickerName={"Diamonds (4)"}
          stickerPrice={"0.008 ETH"}
          stickerTime={"23 часа 05 мин 08 сек"}
        />
        <Card
          stickerImg={"/img/Holofobia-2.svg"}
          profileImg={"/img/Ellipse 2 (3).svg"}
          nameProfile={"ttgs"}
          stickerName={"Holofobia-2"}
          stickerPrice={"1.0 ETH"}
          stickerTime={"01 час 15 мин 55 сек"}
        />
        <Card
          stickerImg={"/img/Baby Yoda 1.svg"}
          profileImg={"/img/Ellipse 2 (4).svg"}
          nameProfile={"Peppppe22"}
          stickerName={"Baby Yoda 1"}
          stickerPrice={"0.2 ETH"}
          stickerTime={"01 час 28 мин 11 сек"}
        />
        <Card
          stickerImg={"/img/alien vs predator-1.svg"}
          profileImg={"/img/Ellipse 2 (5).svg"}
          nameProfile={"1300e1440"}
          stickerName={"alien vs. predator (01)"}
          stickerPrice={"0.09 ETH"}
          stickerTime={"08 часов 44 мин 43 сек"}
        />
        <Card
          stickerImg={"/img/IAMDECEPTICON.svg"}
          profileImg={"/img/Ellipse 2 (6).svg"}
          nameProfile={"Robert_Wward"}
          stickerName={"IAMDECEPTICON"}
          stickerPrice={"0.1 ETH"}
          stickerTime={"55 мин 18 сек"}
        />
        <Card
          stickerImg={"/img/Ghostbusters-1 1.svg"}
          profileImg={"/img/Ellipse 2 (7).svg"}
          nameProfile={"ttgs"}
          stickerName={"Ghostbusterrrrrrrs"}
          stickerPrice={"0.09 ETH"}
          stickerTime={"18 мин 12 сек"}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <AllAuctionButton>Все аукционы</AllAuctionButton>
      </div>
    </div>
  );
};

export default AnotherAuction;
