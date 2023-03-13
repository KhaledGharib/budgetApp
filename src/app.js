import "normalize.css/normalize.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import AppRouter from "./routers/AppRouter";
import getVisibleExpenses from "./selectors/expenses";
import configurestore from "./store/configurestore";
import "./styles/style.scss";

////////
const store = configurestore();
console.log("test");
// store.dispatch(addExpense({ description: "water bill", amount: 70 }));
// store.dispatch(addExpense({ description: "rent", amount: 800 }));
// store.dispatch(addExpense({ description: "Gas bill", createdAt: 1000 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);
///////

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const container = document.getElementById("app");
const root = createRoot(container);

root.render(jsx);
