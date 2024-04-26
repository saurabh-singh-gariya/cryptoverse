import { useEffect } from "react";
import { mockData } from "../Constants/mockData";
import CryptoListItem from "../component/Crypto/CryptoListItem";
import { fetchTrendingCoins } from "../store/slice/trendingSlice";
import { useDispatch } from "react-redux";

const Trending = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrendingCoins());
  }, []);
  return (
    <div className="w-[90%] mx-auto pt-8">
      <div className="text-white text-2xl font-semibold">
        Top 10 trending coins across the world!
      </div>
      <div className="flex gap-2 flex-col mt-4">
        {mockData?.splice(0, 10)?.map((coin, index) => (
          <CryptoListItem key={index} {...coin} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
