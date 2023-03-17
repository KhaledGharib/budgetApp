import React from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import ExpensesForm from "./ExpensesForm";

const EditExpensePage = (props) => {
  const navigate = useNavigate();

  const { id } = useParams();
  const selectedExpense = props.expenses.find((expenses) => expenses.id === id);

  // console.log(selectedExpense);
  return (
    <div>
      <ExpensesForm
        expense={selectedExpense}
        onSubmit={(expense) => {
          props.dispatch(startEditExpense(id, expense));
          navigate("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(startRemoveExpense({ id }));
          navigate("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};
const mapStateTpProps = (state) => {
  return {
    expenses: state.expenses,
  };
};
export default connect(mapStateTpProps)(EditExpensePage);
