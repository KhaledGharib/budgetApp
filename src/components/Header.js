import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import { startLogout } from "../actions/auth";
const Header = ({ startLogout }) => (
  <header className="header">
    <div className="container">
      <div className="header__content">
        <Link to="/dashboard" className="header__title" end>
          <h1>Expensify</h1>
        </Link>

        <button className="button button-logout" onClick={startLogout}>
          Logout
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
