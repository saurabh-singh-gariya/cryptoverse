import React, { useEffect } from "react";
import TableHeader from "../component/Crypto/TableHeader";
import ShimmerList from "../component/Crypto/Shimmer/ShimmerList";
import CryptoList from "../component/Crypto/CryptoList";
import ErrorPage from "./ErrorPage";
import { useDispatch, useSelector } from "react-redux";
import { getAlreadySavedCoins } from "../Utils/LocalStorage";
import {
  fetchSavedCoins,
  resetSavedCoinsStore,
} from "../store/slice/savedCoinSlice";

const Saved = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const alreadySaved = getAlreadySavedCoins();
    dispatch(fetchSavedCoins(alreadySaved));

    return () => {
      dispatch(resetSavedCoinsStore());
    };
  }, []);

  const error = useSelector((state) => state?.savedCoins?.error);
  const coinsLoading = useSelector((state) => state?.savedCoins?.loading);
  const coins = useSelector((state) => state?.savedCoins?.savedCoins);

  return (
    <div className="w-[90%] mx-auto pt-8 h-full">
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
        <ErrorPage errorMessage={error} />
      )}
    </div>
  );
};

export default Saved;
