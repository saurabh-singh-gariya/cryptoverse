import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCoinById = createAsyncThunk(
  "singleCoin/fetchCoinById",
  async (id) => {
    try {
      const URL = `https://api.coingecko.com/api/v3/coins/${id}`;
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      return error?.message ?? "Error";
    }
  }
);

export const fetchChartData = createAsyncThunk(
  "singleCoin/fetchChartData",
  async ({ id, days }) => {
    const URL = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;
    const response = await axios.get(URL);
    return response.data;
  }
);

const initialState = {
  coinData: {},
  loading: false,
  error: undefined,
  chartData: {},
  chartDataLoading: false,
  chartDataError: undefined,
};

const singleCoinSlice = createSlice({
  name: "singleCoin",
  initialState,
  reducers: {
    resetSingleCoin: (state) => {
      state.coinData = {};
      state.loading = false;
      state.error = undefined;
    },
    resetChartData: (state) => {
      state.chartData = {};
      state.chartDataLoading = false;
      state.chartDataError = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoinById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCoinById.rejected, (state, action) => {
      (state.loading = false), (state.error = action.payload.message);
    });
    builder.addCase(fetchCoinById.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.coinData = action.payload;
    });
    builder.addCase(fetchChartData.pending, (state) => {
      state.chartDataLoading = true;
    });
    builder.addCase(fetchChartData.rejected, (state, action) => {
      state.chartDataLoading = false;
      state.chartDataError = action.payload;
    });
    builder.addCase(fetchChartData.fulfilled, (state, action) => {
      state.chartDataLoading = false;
      state.chartData = action.payload;
    });
  },
});

export const { resetSingleCoin, resetChartData } = singleCoinSlice.actions;

export default singleCoinSlice.reducer;
