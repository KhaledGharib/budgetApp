import React from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? "is-active" : undefined)}
      end
    >
      Dashboard
    </NavLink>
    <NavLink
      to="/add"
      className={({ isActive }) => (isActive ? "is-active" : undefined)}
      end
    >
      Add Expense
    </NavLink>

    <NavLink
      to="/help"
      className={({ isActive }) => (isActive ? "is-active" : undefined)}
      end
    >
      Help
    </NavLink>
  </header>
);

export default Header;
