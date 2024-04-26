import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCryptoCoins = createAsyncThunk(
  "crypto/fetchCryptoCoins",
  async () => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
    const response = await axios.get(url, options);
    return response;
  }
);

const initialState = {
  coins: [],
  loading: false,
  error: undefined,
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCryptoCoins.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCryptoCoins.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
    builder.addCase(fetchCryptoCoins.fulfilled, (state, action) => {
      state.loading = false;
      state.coins = action.payload.data;
    });
  },
});

export const getAllCryptoCoint = (state) => state.cryptoCoins.coins;

export default cryptoSlice.reducer;
