import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export { createSlice } from "@reduxjs/toolkit";

export const fetchSavedCoins = createAsyncThunk(
  "savedCoins/fetechSavedCoins",
  async (totalCoins, { rejectWithValue }) => {
    try {
      if (!totalCoins) {
        return rejectWithValue("error");
      }
      const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${totalCoins?.join()}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`;
      const response = await axios.get(URL);
      if (response?.data) {
        return response?.data;
      } else {
        return rejectWithValue("Error while Fetching Saved Coins");
      }
    } catch (error) {
      return rejectWithValue(error?.message ?? "Error");
    }
  }
);

const initialState = {
  savedCoins: [],
  loading: false,
  error: null,
};

const savedCoinSlice = createSlice({
  name: "savedCoins",
  initialState,
  reducers: {
    resetSavedCoinsStore: (state) => {
      state.savedCoins = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSavedCoins.pending, (state) => {
      const newState = { ...state, loading: true };
      state = newState;
    });
    builder.addCase(fetchSavedCoins.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchSavedCoins.fulfilled, (state, action) => {
      state.savedCoins = action.payload;
      state.loading = false;
      state.error = null;
    });
  },
});

export const { resetSavedCoinsStore } = savedCoinSlice.actions;

export default savedCoinSlice.reducer;
