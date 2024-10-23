import { createSlice } from "@reduxjs/toolkit";

interface IAppState {
  isDarkMode: boolean;
}

const initialState: IAppState = {
  isDarkMode: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setIsDarkMode } = appSlice.actions;

export default appSlice.reducer;
