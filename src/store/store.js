import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./slice/cryptoSlice";
import trendingReducer from "./slice/trendingSlice";
import singleCoinReducer from "./slice/singleCoinSlice";
import savedCoinReducer from "./slice/savedCoinSlice";

export const appStore = configureStore({
  reducer: {
    cryptoCoins: cryptoReducer,
    trendingCoins: trendingReducer,
    singleCoin: singleCoinReducer,
    savedCoins: savedCoinReducer,
  },
});

export default appStore;
