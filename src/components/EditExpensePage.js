import React from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editExpense, removeExpense } from "../actions/expenses";
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
          props.dispatch(editExpense(id, expense));
          navigate("/");
          // console.log("update", expense);
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id }));
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
