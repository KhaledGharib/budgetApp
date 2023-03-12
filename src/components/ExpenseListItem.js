import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeExpense } from "../actions/expenses";

const ExpensesListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {amount}-{createdAt}
    </p>
  </div>
);

// const mapStateTpProps = (state) => {
//   return {
//     expenses: state.expenses,
//     filters: state.filters,
//   };
// };

export default ExpensesListItem;
