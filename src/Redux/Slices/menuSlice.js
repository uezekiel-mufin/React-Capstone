import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuState: false,
  title: 'Home',
};

const menuSlice = createSlice({
  name: 'menuSlice',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      const newState = { ...state };
      newState.title = action.payload;
      return newState;
    },
  },
});

export default menuSlice.reducer;
export const { setTitle } = menuSlice.actions;
