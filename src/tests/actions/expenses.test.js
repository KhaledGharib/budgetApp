import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("remove expenses", () => {
  const action = removeExpense({ id: "1234abc" });
  expect(action).toEqual({
    type: "removeExpense",
    id: "1234abc",
  });
});

test("update expense", () => {
  const action = editExpense("125abc", { note: "updated" });
  expect(action).toEqual({
    type: "editExpense",
    id: "125abc",
    updates: {
      note: "updated",
    },
  });
});

test("setup addExpense with provided values", () => {
  const expenseData = {
    description: "rent",
    amount: 750,
    createdAt: 1000,
    note: "test note",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "addExpense",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});
test("setup addExpense with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "addExpense",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
  });
});
