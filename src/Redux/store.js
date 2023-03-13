import { configureStore } from '@reduxjs/toolkit';
import fetchReducer from './Slices/movieFetchSlice';
import menuReducer from './Slices/menuSlice';

const store = configureStore({
  reducer: {
    cards: fetchReducer,
    menu: menuReducer,
  },
});

export default store;
