import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  method: "dijkstra",
};

const pathSlice = createSlice({
  name: "path",
  initialState,
  reducers: {
    setMethod(state, action) {
      state.method = action.payload;
    },
  },
});

export const pathReducer = pathSlice.reducer;
export const pathActions = pathSlice.actions;
