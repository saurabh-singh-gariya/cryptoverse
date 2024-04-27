import { useEffect } from "react";
import { mockData } from "../Constants/mockData";
import CryptoListItem from "../component/Crypto/CryptoListItem";
import {
  fetchTrendingCoins,
  resetTrendingStore,
} from "../store/slice/trendingSlice";
import { useDispatch, useSelector } from "react-redux";
import TrendingList from "../component/Trending/TrendingList";
import ShimmerList from "../component/Trending/Shimmer/ShimmerList";

const Trending = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrendingCoins());
    return () => dispatch(resetTrendingStore());
  }, []);

  const loading = useSelector((state) => state?.trendingCoins.loading);
  const trendingCoins = useSelector(
    (state) => state?.trendingCoins?.trendingCoins
  );

  return (
    <div className="w-[90%] mx-auto pt-8">
      <div className="text-white text-2xl font-semibold">
        Top 10 trending coins across the world!
      </div>
      {loading ? (
        <ShimmerList />
      ) : (
        <TrendingList trendingCoins={trendingCoins} />
      )}
    </div>
  );
};

export default Trending;
