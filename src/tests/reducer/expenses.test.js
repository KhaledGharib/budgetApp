import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by ID", () => {
  const action = {
    type: "removeExpense",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if not found ID", () => {
  const action = {
    type: "removeExpense",
    id: -1,
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const expense = {
    id: 4,
    description: "test",
    note: "test",
    amount: 750,
    createdAte: 1000,
  };
  const action = {
    type: "addExpense",
    expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
  const note = "reset";
  const action = {
    type: "editExpense",
    id: expenses[1].id,
    updates: {
      note,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe(note);
});

test("should not edit if expense not found ", () => {
  const amount = 17520;
  const action = {
    type: "editExpense",
    id: 6,
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
