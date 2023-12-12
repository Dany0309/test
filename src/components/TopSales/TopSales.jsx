import React from "react";
import classes from "./TopSales.module.css";
import TopSalesCard from "./UI/TopSalesCard/TopSalesCard";

const TopSales = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Топ продаж</h1>
      <div className={classes.content}>
        <TopSalesCard
          stickerImg={"/img/Holofobia-1 1.svg"}
          nameProfile={"ttgs"}
          profileImg={"/img/Ellipse 2 (3).svg"}
          stickerName={"Holofobia1"}
          stickerPrice={"4.70 ETH"}
          stickerPriceTransfer={"($16,873.47)"}
        />
        <TopSalesCard
          stickerImg={"/img/212.svg"}
          nameProfile={"Tat_2"}
          profileImg={"/img/Ellipse 221.svg"}
          stickerName={"Y.EEE"}
          stickerPrice={"3.00 ETH"}
          stickerPriceTransfer={"($10,731.24)"}
        />
        <TopSalesCard
          stickerImg={"/img/123.svg"}
          nameProfile={"Chris22"}
          profileImg={"/img/213123.svg"}
          stickerName={"Baby Joda"}
          stickerPrice={"2.00 ETH"}
          stickerPriceTransfer={"($7,121.04)"}
        />
        <TopSalesCard
          stickerImg={"/img/ds.svg"}
          nameProfile={"Oswaald"}
          profileImg={"/img/asdad.svg"}
          stickerName={"Infinity_09"}
          stickerPrice={"1.6109 ETH"}
          stickerPriceTransfer={"($5,762.32)"}
        />
        <TopSalesCard
          stickerImg={"/img/1221.svg"}
          nameProfile={"Paul-22"}
          profileImg={"/img/1231.svg"}
          stickerName={"Sadsadsad"}
          stickerPrice={"1.50 ETH"}
          stickerPriceTransfer={"($5,365.62)"}
        />
        <TopSalesCard
          stickerImg={"/img/32131.svg"}
          nameProfile={"wardxxx"}
          profileImg={"/img/4123.svg"}
          stickerName={"Attntn"}
          stickerPrice={"1.0 ETH"}
          stickerPriceTransfer={"($3,577.08)"}
        />
      </div>
    </div>
  );
};

export default TopSales;
