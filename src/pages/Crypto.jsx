import React, { useState } from "react";
import SearchBar from "../component/Crypto/SearchBar";
import CryptoList from "../component/Crypto/CryptoList";
import { mockData } from "../Constants/mockData";
import { useEffect } from "react";
import { fetchCryptoCoins, resetCryotoStore } from "../store/slice/cryptoSlice";
import { useDispatch, useSelector } from "react-redux";
import ShimmerList from "../component/Crypto/Shimmer/ShimmerList";
import TableHeader from "../component/Crypto/TableHeader";

const Crypto = () => {
  const onSearchClicked = (searchedCoin) => {
    console.log(searchedCoin);
  };
  const dispatch = useDispatch();

  const coins = useSelector((state) => state?.cryptoCoins?.coins);
  const coinsLoading = useSelector((state) => state?.cryptoCoins?.loading);

  useEffect(() => {
    dispatch(fetchCryptoCoins());
    return () => {
      dispatch(resetCryotoStore());
    };
  }, []);
  return (
    <div className="w-[90%] mx-auto pt-8">
      {coinsLoading ? (
        <ShimmerList />
      ) : (
        <>
          {/* <SearchBar onSearchClicked={onSearchClicked} /> */}
          <TableHeader />
          <CryptoList cryptoList={coins} />
        </>
      )}
    </div>
  );
};

export default Crypto;
