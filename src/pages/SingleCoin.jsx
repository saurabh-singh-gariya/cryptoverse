import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCoinById,
  resetSingleCoin,
} from "../store/slice/singleCoinSlice";
import SingleCoinAbout from "../component/SingleCoin/SingleCoinAbout";
import SingleCoinGraph from "../component/SingleCoin/SingleCoinGraph";

const SingleCoin = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoinById(id));

    return () => dispatch(resetSingleCoin());
  }, []);

  const coinDetails = useSelector((state) => state?.singleCoin?.coinData);

  return (
    <div className="w-[90%] mx-auto pt-8 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-[30%] h-full">
        <SingleCoinAbout coin={coinDetails} />
      </div>
      <div className="w-full md:w-[70%] h-full">
        <SingleCoinGraph />
      </div>
    </div>
  );
};

export default SingleCoin;
