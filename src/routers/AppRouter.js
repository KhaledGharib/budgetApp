import { createBrowserHistory } from "history";
import React, { Fragment } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";

import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import HelpExpensePage from "../components/HelpExpensePage";
import LoginPage from "../components/LoginPage";
import PageNotFound from "../components/PageNotFound";
import PrivateRoute from "./PrivateRoute";

import PublicRoute from "./PublicRoute";
///

///

export const history = createBrowserHistory();
const AppRouter = () => (
  <HistoryRouter history={history}>
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <ExpenseDashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit"
          element={
            <PrivateRoute>
              <EditExpensePage />
            </PrivateRoute>
          }
        />
        <Route
          path="help"
          element={
            // <PrivateRoute>
            <HelpExpensePage />
            // </PrivateRoute>
          }
        />
        <Route
          path="add"
          element={
            // <PrivateRoute>
            <AddExpensePage />
            // </PrivateRoute>
          }
        />
        <Route
          path="edit/:id"
          element={
            // <PrivateRoute>
            <EditExpensePage />
            // </PrivateRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  </HistoryRouter>
);

export default AppRouter;
