import { configureStore } from "@reduxjs/toolkit";
import { sortReducer } from "./Slices/sortSlice";
import { pathReducer } from "./Slices/pathSlice";

const store = configureStore({
  reducer: {
    sort: sortReducer,
    path: pathReducer,
  },
});

export default store;
