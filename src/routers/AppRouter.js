import React from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import Header from "../components/Header";
import HelpExpensePage from "../components/HelpExpensePage";
import PageNotFound from "../components/PageNotFound";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ExpenseDashboardPage />} />
        <Route path="/help" element={<HelpExpensePage />} />
        <Route path="/add" element={<AddExpensePage />} />
        <Route path="/edit/:id" element={<EditExpensePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default AppRouter;
