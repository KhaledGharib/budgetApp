import React from "react";
import { connect } from "react-redux";
import selectExpense from "../selectors/expenses";
import ExpensesListItem from "./ExpenseListItem";

const ExpenseList = (props) => (
  <div>
    <h1>Expense list </h1>
    {props.expenses.map((expense) => {
      return <ExpensesListItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapStateTpProps = (state) => {
  return {
    expenses: selectExpense(state.expenses, state.filters),
  };
};
export default connect(mapStateTpProps)(ExpenseList);
