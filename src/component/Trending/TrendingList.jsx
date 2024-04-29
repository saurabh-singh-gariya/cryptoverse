/* eslint-disable react/prop-types */
import React from "react";
import TrendingListItem from "./TrendingListItem";

const TrendingList = ({ trendingCoins }) => {
  return (
    <div className="flex flex-wrap gap-5 mt-10 justify-around">
      {trendingCoins &&
        trendingCoins?.map((coin) => (
          <TrendingListItem key={coin.id} {...coin} />
        ))}
    </div>
  );
};

export default TrendingList;
