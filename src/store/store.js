import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./slice/cryptoSlice";
export const appStore = configureStore({
  reducer: { cryptoCoins: cryptoReducer },
});

export default appStore;
