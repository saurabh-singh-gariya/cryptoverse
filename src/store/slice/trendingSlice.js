import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTrendingCoins = createAsyncThunk(
  "crypto/fetchCryptoCoins",
  async () => {
    const url = "https://api.coingecko.com/api/v3/search/trending";
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
  trendingCoins: [],
  loading: false,
  error: undefined,
};

const trendingSlice = createSlice({
  name: "trendingCoins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrendingCoins.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTrendingCoins.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
    builder.addCase(fetchTrendingCoins.fulfilled, (state, action) => {
      state.loading = false;
      state.trendingCoins = action.payload.data;
    });
  },
});

export const getAllTrendingCoins = (state) => state.trendingCoins.trendingCoins;

export default trendingSlice.reducer;
