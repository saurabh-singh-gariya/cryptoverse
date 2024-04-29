import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./slice/cryptoSlice";
import trendingReducer from "./slice/trendingSlice";
import singleCoinReducer from "./slice/singleCoinSlice";

export const appStore = configureStore({
  reducer: {
    cryptoCoins: cryptoReducer,
    trendingCoins: trendingReducer,
    singleCoin: singleCoinReducer,
  },
});

export default appStore;
