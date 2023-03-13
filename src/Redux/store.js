import { configureStore } from '@reduxjs/toolkit';
import fetchReducer from './Slices/movieFetchSlice';

const store = configureStore({
  reducer: {
    cards: fetchReducer,
  },
});

export default store;
