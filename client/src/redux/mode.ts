import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      return {
        ...state,
        mode: state.mode === "light" ? "dark" : "light",
      };
    },
  },
});

export const { toggleMode } = modeSlice.actions;

export default modeSlice.reducer;
