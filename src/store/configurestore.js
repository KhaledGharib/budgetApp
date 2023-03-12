import { configureStore, createSlice } from "@reduxjs/toolkit";
import expenessReducer from "../reducers/expenses";
import filtersReaducer from "../reducers/filters";

export default () => {
  const store = configureStore({
    reducer: {
      expenses: expenessReducer,
      filters: filtersReaducer,
    },
  });
  return store;
};
