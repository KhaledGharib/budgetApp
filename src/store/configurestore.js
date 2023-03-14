import { configureStore, createSlice } from "@reduxjs/toolkit";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

const defaultMiddlewareConfig = {
  serializableCheck: {
    ignoredPaths: ["filters.startDate", "filters.endDate"],
  },
};

export default () => {
  const store = configureStore({
    reducer: {
      expenses: expensesReducer,
      filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware(defaultMiddlewareConfig),
  });
  return store;
};
