import { v4 as uuidv4 } from "uuid";

export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "addExpense",
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  },
});
// remove expense
export const removeExpense = ({ id } = {}) => ({
  type: "removeExpense",
  id,
});

// ** Edit Expense **
export const editExpense = (id, updates) => ({
  type: "editExpense",
  id,
  updates,
});
