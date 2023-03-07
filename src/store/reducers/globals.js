import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sideBarShown: false,
};

export const globalSlice = createSlice({
  name: 'globals',
  initialState,
  reducers: {
    setSideBarShow: (state, { payload }) => {
      state.sideBarShown = payload;
    },
  },
});

export const selectSidebarShown = ({ globals }) => globals.sideBarShown;

export const { setSideBarShow } = globalSlice.actions;

export default globalSlice.reducer;
