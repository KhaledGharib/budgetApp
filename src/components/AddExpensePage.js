import React from "react";
import { connect } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import { startAddExpense } from "../actions/expenses";
import ExpensesForm from "./ExpensesForm";

const AddExpensePage = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Add Expenses</h1>
      <ExpensesForm
        onSubmit={(expenses) => {
          props.dispatch(startAddExpense(expenses));
          navigate("/");
          // console.log(expenses);
        }}
      />
    </div>
  );
};

export default connect()(AddExpensePage);
