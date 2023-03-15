import { configureStore } from '@reduxjs/toolkit';
import fetchReducer from './Slices/brandsFetchSlice';
import menuReducer from './Slices/menuSlice';

const store = configureStore({
  reducer: {
    brands: fetchReducer,
    menu: menuReducer,
  },
});

export default store;
