import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortMethod: "merge",
  size: 100,
};

const sortSlice = createSlice({
  name: "sortSlice",
  initialState,
  reducers: {
    setSortMethod(state, action) {
      state.sortMethod = action.payload;
    },
    setSize(state, action) {
      state.size = action.payload;
    },
  },
});

export const sortActions = sortSlice.actions;
export const sortReducer = sortSlice.reducer;
