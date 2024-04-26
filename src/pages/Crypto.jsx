import React, { useState } from "react";
import SearchBar from "../component/Crypto/SearchBar";
import CryptoList from "../component/Crypto/CryptoList";
import { mockData } from "../Constants/mockData";
import { useEffect } from "react";
import { fetchCryptoCoins } from "../store/slice/cryptoSlice";
import { useDispatch, useSelector } from "react-redux";
import ShimmerList from "../component/Common/ShimmerList";

//is component k mount hone pe api call karni h
//isme ek search bar hoga
const Crypto = () => {
  const onSearchClicked = (searchedCoin) => {
    console.log(searchedCoin);
  };
  const dispatch = useDispatch();

  const coins = useSelector((state) => state?.cryptoCoins?.coins);
  const coinsLoading = useSelector((state) => state?.cryptoCoins?.loading);

  useEffect(() => {
    dispatch(fetchCryptoCoins());
  }, []);
  return (
    <div className="w-[90%] mx-auto pt-8">
      {coinsLoading ? (
        <ShimmerList />
      ) : (
        <>
          <SearchBar onSearchClicked={onSearchClicked} />
          <CryptoList cryptoList={coins} />
        </>
      )}
    </div>
  );
};

export default Crypto;
