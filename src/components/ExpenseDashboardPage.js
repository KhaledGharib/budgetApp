import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListfilters from "./ExpenseListFilters";
import ExpensesSammary from "./ExpensesSammary";
const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSammary />
    <ExpenseListfilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
