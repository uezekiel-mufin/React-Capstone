import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  brands: [],
};

export const fetchBrands = createAsyncThunk('fetchBrands', async () => {
  const { data } = await axios.get(
    // 'http://phone-specs-api.azharimm.dev/infinix_hot_12-11498',
    // 'http://phone-specs-api.azharimm.dev/brands/infinix-phones-119',
    'http://phone-specs-api.azharimm.dev/brands',
  );
  return data.data;
});

const brandSlice = createSlice({
  name: 'fetchBrands',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBrands.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.brands = action.payload;
      return newState;
    });
  },
});

export default brandSlice.reducer;
