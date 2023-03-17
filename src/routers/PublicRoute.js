import React from "react";
import { connect } from "react-redux";
import { Navigate, Route } from "react-router-dom";

//! Route V6 uses this to properly use Private routes
const PublicRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? <Navigate to="/dashboard" /> : <div>{children}</div>;
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.uid,
  };
};

export default connect(mapStateToProps)(PublicRoute);
