/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import CurrencyFormat from "react-currency-format";

const CryptoListItem = ({
  image,
  name,
  symbol,
  current_price,
  price_change_percentage_24h,
  market_cap,
}) => {
  const getTwoFixedNum = (value) => Number(value).toFixed(2);
  const getFormattedAmount = (value) => (
    <CurrencyFormat
      value={getTwoFixedNum(value)}
      displayType="text"
      thousandSeparator
      prefix="$"
    />
  );
  const truncatedName = name.length > 10 ? `${name.slice(0, 10)}...` : name;
  return (
    <div className="bg-white w-full flex justify-between py-4 px-4 rounded-md text-black items-center cursor-pointer text-lg">
      <div className="w-[30%] sm:w-[15%] md:w-[10%]">
        <img src={image} alt="Cryptocurrency logo" className="w-7" />
      </div>
      <div className="w-[35%] sm:w-[25%] md:w-[20%] flex flex-col uppercase text-xs justify-center items-start">
        <span className="font-semibold text-xl">{symbol}</span>
        <span title={name} className="truncate">
          {truncatedName}
        </span>
      </div>
      <div className="hidden md:block w-[20%] font-semibold">
        <span
          className={`py-1.5 px-2 border rounded-lg  hover:text-white ${
            getTwoFixedNum(price_change_percentage_24h) > 0
              ? "text-green-400 border-green-400 hover:bg-green-400"
              : "text-red-500 border-red-500 hover:bg-red-500"
          }`}
        >
          {getTwoFixedNum(price_change_percentage_24h)}%
        </span>
      </div>
      <div className="w-[35%] sm:w-[20%] md:w-[25%] font-semibold">
        {getFormattedAmount(current_price)}
      </div>
      <div className="hidden sm:flex w-[35%] md:w-[25%] font-semibold">
        {getFormattedAmount(market_cap)}
      </div>
    </div>
  );
};

export default CryptoListItem;
