/* eslint-disable react/prop-types */
import React from "react";
import { FormattedNumber } from "react-intl";
import { Link } from "react-router-dom";

const TrendingListItem = ({
  id,
  image,
  symbol,
  name,
  price_change_24h,
  total_volume,
  market_cap,
  current_price,
}) => {
  const truncatedName = name?.length > 8 ? `${name.slice(0, 8)}...` : name;
  const getTwoFixedNum = (value) => Number(value).toFixed(2);
  const getAmountMillion = (value) => {
    const array = value.split(",");
    const amountString = array.join("");
    let amountWithoutDollar = amountString.replace("$", "");
    return `$ ${getTwoFixedNum(Number(amountWithoutDollar) / 1000000)} M`;
  };
  const getFormattedAmount = (value) => (
    <FormattedNumber
      style="currency"
      value={getTwoFixedNum(value)}
      currency="USD"
    />
  );
  return (
    <Link to={`/coin/${id}`}>
      <div className="bg-white text-black w-60 h-56 rounded-2xl py-6 px-8 gap-2 flex flex-col">
        <div className="flex">
          <img src={image} alt="crypto-image" className="rounded-full" />
          <div className="flex flex-col ml-4">
            <span className="font-bold text-lg">{symbol}</span>
            <span className="font-medium text-sm">{truncatedName}</span>
          </div>
        </div>
        <div className="flex mt-2 gap-3">
          <span
            className={`py-1.5 px-2 border rounded-3xl text-xs font-bold flex items-center hover:text-white cursor-pointer ${
              getTwoFixedNum(price_change_24h) > 0
                ? "text-green-700 border-green-700 hover:bg-green-700"
                : "text-red-700 border-red-700 hover:bg-red-700"
            }`}
          >
            {getTwoFixedNum(price_change_24h)}%
          </span>
          {getTwoFixedNum(price_change_24h) < 0 ? (
            <svg
              width="32px"
              className="border border-red-700 p-1.5 rounded-full"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 17L14.1314 9.13137C13.7354 8.73535 13.5373 8.53735 13.309 8.46316C13.1082 8.3979 12.8918 8.3979 12.691 8.46316C12.4627 8.53735 12.2646 8.73535 11.8686 9.13137L9.13137 11.8686C8.73535 12.2646 8.53735 12.4627 8.30902 12.5368C8.10817 12.6021 7.89183 12.6021 7.69098 12.5368C7.46265 12.4627 7.26465 12.2646 6.86863 11.8686L2 7M22 17H15M22 17V10"
                stroke="#B91C1C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="32px"
              className="border border-green-700 p-1.5 rounded-full"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14"
                stroke="#15803D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <div className="font-extrabold">
          {getFormattedAmount(current_price)}
        </div>
        <div className="flex text-xs gap-2">
          <span className="font-semibold">Total Volume:</span>
          <span className="font-medium">{getAmountMillion(total_volume)}</span>
        </div>
        <div className="flex text-xs gap-2 -mt-1.5">
          <span className="font-semibold">Market Cap:</span>
          <span className="font-medium">{getAmountMillion(market_cap)}</span>
        </div>
      </div>
    </Link>
  );
};

export default TrendingListItem;
