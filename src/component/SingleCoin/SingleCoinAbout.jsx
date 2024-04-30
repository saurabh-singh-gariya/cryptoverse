/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { getAmountMillion } from "../../Utils/CurrencyFormatter";
import { FormattedNumber } from "react-intl";
import { LOCAL_STORAGE_KEY } from "../../Constants/constants";
import { getAlreadySavedCoins } from "../../Utils/LocalStorage";

const SingleCoinAbout = ({ coin }) => {
  const id = "singleCoinAbout";
  const [saved, setSaved] = useState(false);
  const getTwoFixedNum = (value) => Number(value).toFixed(2);
  const getFormattedAmount = (value) => (
    <FormattedNumber
      style="currency"
      value={getTwoFixedNum(value)}
      currency="USD"
    />
  );

  useEffect(() => {
    const alreadySaved = getAlreadySavedCoins();
    if (alreadySaved?.find((item) => item === coin?.id)) {
      setSaved(true);
    }
  }, [coin]);

  const saveToLocalStorage = () => {
    //checkif there is already an item in the loca storage
    let saveItem;
    const alreadySaved = getAlreadySavedCoins();
    if (alreadySaved) {
      saveItem = [...alreadySaved, coin?.id];
    } else {
      saveItem = coin?.id;
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, saveItem);
    setSaved(true);
  };

  const removeFromLocalStorage = () => {
    const alreadySaved = getAlreadySavedCoins();
    if (alreadySaved?.length === 1) {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } else {
      let newArray = alreadySaved.filter((item) => item !== coin?.id);
      localStorage.setItem(LOCAL_STORAGE_KEY, newArray);
    }
    setSaved(false);
  };

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
          className="text-black px-6 py-2 text-xl font-medium rounded-xl border border-black flex items-center gap-1"
          onClick={() =>
            saved ? removeFromLocalStorage() : saveToLocalStorage()
          }
        >
          {saved ? (
            <>
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
              </svg>
              {"Remove from Wishlist"}
            </>
          ) : (
            <>
              <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 100 16 8 8 0 000-16z"
                  clipRule="evenodd"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M13 7a1 1 0 10-2 0v4H7a1 1 0 100 2h4v4a1 1 0 102 0v-4h4a1 1 0 100-2h-4V7z"
                  clipRule="evenodd"
                />
              </svg>
              {"Add to Wishlist"}
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SingleCoinAbout;
