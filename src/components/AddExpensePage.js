import React from "react";
import { connect } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import { startAddExpense } from "../actions/expenses";
import ExpensesForm from "./ExpensesForm";
import Header from "./Header";

const AddExpensePage = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />

      <div className="page-header">
        <div className="container">
          <h1>Add Expenses</h1>
        </div>
      </div>
      <div className="container">
        <ExpensesForm
          onSubmit={(expenses) => {
            props.dispatch(startAddExpense(expenses));
            navigate("/");
          }}
        />
      </div>
    </div>
  );
};

export default connect()(AddExpensePage);
