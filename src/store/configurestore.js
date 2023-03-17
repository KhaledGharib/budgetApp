import { applyMiddleware, configureStore, createSlice } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import authReducer from "../reducers/auth";

const defaultMiddlewareConfig = {
  serializableCheck: {
    ignoredPaths: ["filters.startDate", "filters.endDate"],
  },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = configureStore(
    {
      reducer: {
        expenses: expensesReducer,
        filters: filtersReducer,
        auth: authReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(defaultMiddlewareConfig),
    },
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
