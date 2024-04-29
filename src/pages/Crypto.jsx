import React, { useState } from "react";
import SearchBar from "../component/Crypto/SearchBar";
import CryptoList from "../component/Crypto/CryptoList";
import { useEffect } from "react";
import { fetchCryptoCoins, resetCryotoStore } from "../store/slice/cryptoSlice";
import { useDispatch, useSelector } from "react-redux";
import ShimmerList from "../component/Crypto/Shimmer/ShimmerList";
import TableHeader from "../component/Crypto/TableHeader";
import ErrorPage from "./ErrorPage";

const Crypto = () => {
  const onSearchClicked = (searchedCoin) => {
    console.log(searchedCoin);
  };
  const dispatch = useDispatch();

  const coins = useSelector((state) => state?.cryptoCoins?.coins);
  const coinsLoading = useSelector((state) => state?.cryptoCoins?.loading);
  const error = useSelector((state) => state.cryptoCoins.error);

  useEffect(() => {
    dispatch(fetchCryptoCoins());
    return () => {
      dispatch(resetCryotoStore());
    };
  }, []);
  return (
    <div className="w-[90%] mx-auto pt-8">
      {!error ? (
        <>
          <TableHeader />
          {coinsLoading ? (
            <ShimmerList />
          ) : (
            <>
              {/* <SearchBar onSearchClicked={onSearchClicked} /> */}
              <CryptoList cryptoList={coins} />
            </>
          )}
        </>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default Crypto;
