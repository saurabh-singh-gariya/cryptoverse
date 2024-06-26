import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCryptoCoins = createAsyncThunk(
  "crypto/fetchCryptoCoins",
  async (_,{ rejectWithValue }) => {
    try {
      const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.message ?? "error");
    }
  }
);

const initialState = {
  coins: [],
  loading: false,
  error: null,
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    resetCryotoStore: (state) => {
      state.coins = [];
      state.loading = false;
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCryptoCoins.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCryptoCoins.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchCryptoCoins.fulfilled, (state, action) => {
      state.loading = false;
      state.coins = action.payload;
      state.error = null;
    });
  },
});

export const getAllCryptoCoin = (state) => state.cryptoCoins.coins;

export const { resetCryotoStore } = cryptoSlice.actions;

export default cryptoSlice.reducer;
