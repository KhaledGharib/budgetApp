import React from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import ExpensesForm from "./ExpensesForm";
import Header from "./Header";

const EditExpensePage = (props) => {
  const navigate = useNavigate();

  const { id } = useParams();
  const selectedExpense = props.expenses.find((expenses) => expenses.id === id);

  return (
    <div>
      <Header />
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Edit Expenses</h1>
        </div>
      </div>
      <div className="container">
        <ExpensesForm
          expense={selectedExpense}
          onSubmit={(expense) => {
            props.dispatch(startEditExpense(id, expense));
            navigate("/");
          }}
        />
        <button
          className="button button-remove"
          onClick={() => {
            props.dispatch(startRemoveExpense({ id }));
            navigate("/");
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
const mapStateTpProps = (state) => {
  return {
    expenses: state.expenses,
  };
};
export default connect(mapStateTpProps)(EditExpensePage);
