/* eslint-disable react/prop-types */
import React from "react";
import { getAmountMillion } from "../../Utils/CurrencyFormatter";
import { FormattedNumber } from "react-intl";

const SingleCoinAbout = ({ coin }) => {
  const id = "singleCoinAbout";
  const getTwoFixedNum = (value) => Number(value).toFixed(2);
  const getFormattedAmount = (value) => (
    <FormattedNumber
      style="currency"
      value={getTwoFixedNum(value)}
      currency="USD"
    />
  );
  return (
    <div
      id={id + ".container"}
      className="text-white flex flex-col justify-center items-center md:pr-4 md:border-r"
    >
      <img
        id={id + ".image"}
        src={coin?.image?.large}
        alt="coin-image"
        className="w-40 mb-4"
      />
      <div id={id + ".name"} className="font-extrabold underline text-3xl mb-4">
        {coin?.name}
      </div>
      <div
        id={id + ".description"}
        className="text-sm font-medium text-justify mb-4"
      >
        {coin?.description?.en?.split(". ")[0]}.
      </div>
      <div id={id + ".rank"} className="w-full text-lg">
        <span className="mr-2 font-bold ">Rank:</span>
        <span className="font-medium">{coin?.market_cap_rank}</span>
      </div>
      <div id={id + ".currentPrice"} className="w-full text-lg">
        <span className="mr-2 font-semibold">Current Price:</span>
        <span className="font-medium">
          {getFormattedAmount(coin?.market_data?.current_price?.usd)}
        </span>
      </div>
      <div id={id + ".marketCap"} className="w-full text-lg">
        <span className="mr-2 font-semibold">Market Cap:</span>
        <span className="font-medium">
          {getAmountMillion(coin?.market_data?.market_cap?.usd)}
        </span>
      </div>

      <div className="mt-4">
        <button
          style={{ backgroundColor: "#FFD700" }}
          className="text-black px-6 py-2 text-xl font-medium rounded-xl border border-black"
        >
          Save!
        </button>
      </div>
    </div>
  );
};

export default SingleCoinAbout;
