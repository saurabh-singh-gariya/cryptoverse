/* eslint-disable react/prop-types */
import React from "react";
import CryptoListItem from "./CryptoListItem";

const CryptoList = ({ cryptoList }) => {
  return (
    <div className="flex gap-2 flex-col mt-4">
      {cryptoList?.map((coin, index) => (
        <CryptoListItem key={index} {...coin} />
      ))}
    </div>
  );
};

export default CryptoList;
