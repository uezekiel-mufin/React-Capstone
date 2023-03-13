import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuState: false,
};

const menuSlice = createSlice({
  name: 'menuSlice',
  initialState,
  reducers: {
    openMenu: (state) => {
      const newState = { ...state };
      newState.menuState = true;
      return newState;
    },
    closeMenu: (state) => {
      const newState = { ...state };
      newState.menuState = false;
      return newState;
    },
  },
});

export default menuSlice.reducer;
export const { openMenu, closeMenu } = menuSlice.actions;
