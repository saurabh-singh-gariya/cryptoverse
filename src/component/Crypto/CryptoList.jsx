/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import CryptoListItem from "./CryptoListItem";
import Pagination from "./Pagination";

const CryptoList = ({ cryptoList }) => {
  const [visibleList, setVisibleList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const list = cryptoList?.slice(0, 8);
    setVisibleList(list);
  }, [cryptoList]);

  const onPageChanged = (pageNo) => {
    setCurrentPage(pageNo);
    let startIndex = (pageNo - 1) * 8;
    let endIndex = startIndex + 8;
    const list = cryptoList?.slice(startIndex, endIndex);
    setVisibleList(list);
  };
  return (
    <>
      <div className="flex gap-2 flex-col mt-4">
        {visibleList &&
          visibleList?.length > 0 &&
          visibleList?.map((coin, index) => (
            <CryptoListItem key={index} {...coin} />
          ))}
      </div>
      {cryptoList?.length > 8 && (
        <Pagination
          listSize={cryptoList?.length}
          pageSize={8}
          currentPage={currentPage}
          setCurrentPage={(pageNo) => onPageChanged(pageNo)}
        />
      )}
    </>
  );
};

export default CryptoList;
