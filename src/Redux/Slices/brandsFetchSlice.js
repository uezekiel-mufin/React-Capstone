import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  brands: [],
  phones: [],
  details: {},
  specs: {},
};

export const fetchBrands = createAsyncThunk('fetchBrands', async () => {
  const { data } = await axios.get(
    // 'http://phone-specs-api.azharimm.dev/infinix_hot_12-11498',
    'http://phone-specs-api.azharimm.dev/brands',
  );
  return data.data;
});

export const fetchPhones = createAsyncThunk('fetchPhones', async (slug) => {
  const { data } = await axios.get(
    // 'http://phone-specs-api.azharimm.dev/infinix_hot_12-11498',
    `http://phone-specs-api.azharimm.dev/brands/${slug}`,
  );
  return data.data.phones;
});

export const fetchPhoneDetails = createAsyncThunk(
  'fetchPhoneDetails',
  async (slug) => {
    const { data } = await axios.get(
      `http://phone-specs-api.azharimm.dev/${slug}`,
    );
    return data.data;
  },
);

const brandSlice = createSlice({
  name: 'fetchBrands',
  initialState,
  reducers: {
    setPhoneSpecs: (state, action) => {
      const newState = { ...state };
      newState.specs = action.payload;
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBrands.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.brands = action.payload;
      return newState;
    });
    builder.addCase(fetchPhones.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.phones = action.payload;
      return newState;
    });
    builder.addCase(fetchPhoneDetails.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.details = action.payload;
      return newState;
    });
  },
});

export default brandSlice.reducer;
export const { setPhoneSpecs } = brandSlice.actions;
