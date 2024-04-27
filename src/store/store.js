import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./slice/cryptoSlice";
import trendingReducer from "./slice/trendingSlice";
export const appStore = configureStore({
  reducer: { cryptoCoins: cryptoReducer, trendingCoins: trendingReducer },
});

export default appStore;
