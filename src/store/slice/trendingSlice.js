import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { mapTrendingData } from "../utils/StoreUtil";

export const fetchTrendingCoins = createAsyncThunk(
  "crypto/fetchTrendingCoins",
  async (_, { rejectWithValue }) => {
    try {
      const url = "https://api.coingecko.com/api/v3/search/trending";
      const options = {
        method: "GET",
      };
      const response = await axios.get(url, options);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error?.message ?? "Error While getting trending Coins"
      );
    }
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
  reducers: {
    resetTrendingStore: (state) => {
      state.trendingCoins = [];
      state.error = undefined;
      state.loading = false;
    },
  },
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
      state.trendingCoins = mapTrendingData(action.payload)?.slice(0, 10);
    });
  },
});

export const getAllTrendingCoins = (state) => state.trendingCoins.trendingCoins;

export const { resetTrendingStore } = trendingSlice.actions;

export default trendingSlice.reducer;
