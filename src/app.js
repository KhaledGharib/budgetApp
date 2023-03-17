import { getAuth } from "@firebase/auth";
import "normalize.css/normalize.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { login, logout } from "./actions/auth";
import { startSetExpenses } from "./actions/expenses";
import AppRouter, { history } from "./routers/AppRouter";
import getVisibleExpenses from "./selectors/expenses";
import configurestore from "./store/configurestore";
import "./styles/style.scss";

////////
const store = configurestore();

///////
const auth = getAuth();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const container = document.getElementById("app");
const root = createRoot(container);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    root.render(jsx);
    hasRendered = true;
  }
};

root.render(<p>Loading ...</p>);

auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
    console.log("login");
  } else {
    store.dispatch(logout());

    renderApp();

    history.push("/");
    console.log("log out");
  }
});
