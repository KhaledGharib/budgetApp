// import React from "react";
// import { connect } from "react-redux";
// import { Navigate, Route } from "react-router-dom";
// import Header from "../components/Header";

// export const PrivateRoute = ({
//   isAuthenticated,
//   component: Component,
//   ...rest
// }) => (
//   <Route
//     {...rest}
//     component={(props) => {
//       return isAuthenticated ? (
//         <div>
//           <Header />
//           <Component {...props} />
//         </div>
//       ) : (
//         <Navigate to="/" />
//       );
//     }}
//   />
// );

// const mapStateToProps = (state) => ({
//   isAuthenticated: !!state.auth.uid,
// });

// export default connect(mapStateToProps)(PrivateRoute);

import React from "react";
import { connect } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import Header from "../components/Header";

//! Route V6 uses this to properly use Private routes
const PrivateRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? (
    <div>
      <Header />
      {children}
    </div>
  ) : (
    <Navigate to="/" />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.uid,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
