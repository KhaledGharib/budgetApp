import React from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";
const Header = ({ startLogout }) => (
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
    <button onClick={startLogout}>logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
